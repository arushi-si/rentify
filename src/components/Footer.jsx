import { useDispatch, useSelector } from "react-redux";
import { RESET_SELECTED_PRODUCTS } from "../store/productSlice";
import { useState } from "react";
import ViewSelectedProducts from "./ViewSelectedProducts";
import { BsExclamationCircle } from "react-icons/bs";
import { createPortal } from "react-dom";

function Footer() {
  const { selectedProducts } = useSelector((store) => store.product);
  const dispatch = useDispatch();
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const totalSelectedProducts = selectedProducts.reduce(
    (acc, curr) => acc + curr.count,
    0
  );

  return (
    <section className="absolute bottom-0">
      <div className="rounded-t-2xl w-full text-[12px] flex justify-between p-3 bg-[#059445] text-white">
        <BsExclamationCircle className="w-5 h-5 mr-4" />
        <p>
          Please ensure all inventory is added upfront. Any items added later
          during pickup will incur extra charges.
        </p>
      </div>
      <div className="bg-white w-full h-[76px] flex items-center justify-between px-8 shadow-[0_-4px_6px_rgba(0,0,0,0.2)]">
        <button
          className="text-[#2B80FF] text-sm"
          onClick={() => setIsOverlayVisible(true)}
        >
          View {totalSelectedProducts} items
        </button>
        <button
          className="blue-btn"
          onClick={() => dispatch(RESET_SELECTED_PRODUCTS())}
        >
          Continue
        </button>
      </div>
      {isOverlayVisible &&
        createPortal(
          <ViewSelectedProducts closeOverlay={setIsOverlayVisible} />,
          document.getElementById("home")
        )}
    </section>
  );
}

export default Footer;
