import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Accordian from "./Accordian";
import { SAVE_ROOM_CATEGORY } from "../store/roomSlice";
import {
  FORCE_UPDATE_SELECTED_PRODUCTS,
  RESET_SELECTED_PRODUCTS,
} from "../store/productSlice";

const AccordianWrapper = () => {
  const { roomCategories, selectedRoomProducts } = useSelector(
    (store) => store.room
  );
  const { selectedProducts } = useSelector((store) => store.product);
  const [openAccordian, setOpenAccordian] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      {Object.entries(roomCategories).map(([roomCategory, count]) => {
        const arr = [];
        for (let i = 0; i < count; i++) {
          const title = `${roomCategory} ${i + 1}`;
          arr.push(
            <Accordian
              open={openAccordian === title}
              key={title}
              title={title}
              onClick={() => {
                const activeTitle = openAccordian;

                if (activeTitle !== "") {
                  dispatch(
                    SAVE_ROOM_CATEGORY({ title: activeTitle, selectedProducts })
                  );
                  dispatch(RESET_SELECTED_PRODUCTS());
                }

                if (activeTitle === title) {
                  setOpenAccordian("");
                  return;
                }

                setOpenAccordian(title);
                dispatch(
                  FORCE_UPDATE_SELECTED_PRODUCTS(selectedRoomProducts[title])
                );
              }}
            />
          );
        }
        return arr;
      })}
    </div>
  );
};

export default AccordianWrapper;
