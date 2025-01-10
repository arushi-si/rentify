import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import CategoryWise from "./CategoryWise";

const Accordian = ({ open, title, onClick }) => {
  return (
    <div className="my-2 bg-[#F7F7F7] transition-all">
      <div className={`flex py-4 px-4  ${open && "mb-4"}`} onClick={onClick}>
        <h4 className="text-sm">{title}</h4>
        {open ? (
          <IoIosArrowUp size={22} className="ml-auto text-[#201600]" />
        ) : (
          <IoIosArrowDown size={22} className="ml-auto" />
        )}
      </div>
      {open ? (
        <div>
          <CategoryWise />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Accordian;
