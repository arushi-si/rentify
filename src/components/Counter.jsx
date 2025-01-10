import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

// eslint-disable-next-line react/prop-types
function Counter({ decrement, value, increment }) {
  return (
    <span className="flex items-center gap-1 text-[#2B80FF]">
      <CiCircleMinus size={20} onClick={decrement} className="cursor-pointer" />
      {value}
      <CiCirclePlus size={20} onClick={increment} className="cursor-pointer" />
    </span>
  );
}

export default Counter;
