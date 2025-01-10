import { useDispatch, useSelector } from "react-redux";
import {
  CATEGORY_DECREMENT,
  CATEGORY_INCREMENT,
  RESET_ROOM_SLICE,
} from "../store/roomSlice";
import Counter from "./Counter";
import { useState } from "react";
import AccordianWrapper from "./AccordianWrapper";
import { RESET_SELECTED_PRODUCTS } from "../store/productSlice";
import ConfirmContent from "./ConfirmContent";

function RoomSelection() {
  const [nextStep, setNextStep] = useState(false);
  const { roomCategories, selectedRoomProducts } = useSelector(
    (store) => store.room
  );
  const dispatch = useDispatch();
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const totalSelectedProducts = Object.values(selectedRoomProducts).reduce(
    (acc, curr) => {
      const total = curr.reduce((acc, curr) => acc + curr.count, 0);
      return acc + total;
    },
    0
  );

  return (
    <section className="overflow-auto h-[calc(100%_-_148px)]">
      {nextStep ? (
        <div>
          <AccordianWrapper />
        </div>
      ) : (
        <ul className="px-4">
          {Object.entries(roomCategories).map(([category, value]) => {
            return (
              <li key={category} className="flex justify-between text-sm my-4">
                {category}{" "}
                <Counter
                  increment={() => dispatch(CATEGORY_INCREMENT(category))}
                  value={value}
                  decrement={() =>
                    value > 0 && dispatch(CATEGORY_DECREMENT(category))
                  }
                />
              </li>
            );
          })}
        </ul>
      )}

      <div className="w-full h-[76px]"></div>
      <div className="absolute px-4 bottom-0 w-full mt-auto h-[76px] bg-white flex items-center justify-around shadow-[0_-4px_6px_rgba(0,0,0,0.2)]">
        {nextStep && (
          <button
            className="text-[#2B80FF] text-sm"
            onClick={() => setIsOverlayVisible(true)}
          >
            View {totalSelectedProducts} items
          </button>
        )}
        <button
          onClick={() => {
            if (nextStep) {
              dispatch(RESET_ROOM_SLICE());
              dispatch(RESET_SELECTED_PRODUCTS());
              setNextStep(false);
              return;
            }
            setNextStep(true);
          }}
          className={`${nextStep ? "blue-btn" : "continue-btn"}`}
        >
          Continue
        </button>
      </div>
    </section>
  );
}

export default RoomSelection;
