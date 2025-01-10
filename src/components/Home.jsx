import { useState } from "react";
import RoomSelection from "./RoomSelection";
import CategoryWise from "./CategoryWise";
import Footer from "./Footer";

function Home() {
  const [activeBtn, setActiveBtn] = useState(false);

  return (
    <section id="home" className="h-full flex flex-col">
      <h1 className="text-center font-bold my-4">
        {!activeBtn ? "Select" : "Add"} Inventory
      </h1>
      <div className="h-1 bg-[#D9D9D9] mb-4">
        <div className="h-full w-1/2 bg-[#2B80FF]"></div>
      </div>
      <div className="main-btns flex items-center justify-between">
        <button
          onClick={() => setActiveBtn(false)}
          className={!activeBtn ? "blue-btn" : ""}
        >
          Room Wise
        </button>
        <button
          onClick={() => setActiveBtn(true)}
          className={activeBtn ? "blue-btn" : ""}
        >
          Categories Wise
        </button>
      </div>

      {!activeBtn ? (
        <RoomSelection />
      ) : (
        <div className="overflow-scroll flex-shrink-1">
          <CategoryWise />
          <Footer />
        </div>
      )}
    </section>
  );
}

export default Home;
