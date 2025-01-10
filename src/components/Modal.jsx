import { createPortal } from "react-dom";
import { render, unmount } from "../utils/render";
import ConfirmContent from "./ConfirmContent";

const Modal = ({ children }) => {
  const childrenWrapper = (
    <div
      id="standalone-modal-wrapper"
      className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      {children}
    </div>
  );

  return createPortal(
    childrenWrapper,
    document.getElementById("app-start") ?? document.body
  );
};

export const standaloneModal = (node) => {
  const container = document.createDocumentFragment();

  const cleanup = () => {
    const wrapper = document.querySelector("#render-modal-wrapper");
    unmount(container);
    wrapper?.remove();
  };

  const timerId = setTimeout(() => {
    clearTimeout(timerId);
    const modalContent = node({ onModalClose: cleanup });
    const dom = <Modal>{modalContent}</Modal>;
    render(dom, container);
  }, 0);

  return {
    cleanup,
  };
};

export const confirmUser = ({ onConfirm }) =>
  standaloneModal(({ onModalClose }) => (
    <ConfirmContent
      onConfirm={onConfirm}
      onCancel={() => {
        onModalClose();
      }}
    />
  ));

export default Modal;
