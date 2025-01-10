import { RiVerifiedBadgeFill } from "react-icons/ri";

function ConfirmContent({ onConfirm, onCancel }) {
  return (
    <div className="p-3 mx-4 rounded-lg bg-white">
      <div className="flex items-start gap-2 mb-6">
        <RiVerifiedBadgeFill size={28} className="text-blue-500" />
        <p className="font-semibold text-sm">
          Are you sure you want to remove this item from Inventory ?
        </p>
      </div>
      <div className="flex items-center justify-end gap-6">
        <button
          onClick={() => {
            onConfirm();
            onCancel();
          }}
          className="appearance-none text-blue-500 text-[12px] font-semibold"
        >
          Remove
        </button>
        <button
          onClick={onCancel}
          className="appearance-none text-white bg-blue-500 text-[12px] py-2 px-3 font-semibold rounded-lg"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ConfirmContent;
