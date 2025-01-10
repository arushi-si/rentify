import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { useState } from "react";
import { SELECT_CATEGORY } from "../store/productSlice";
import { CiSearch } from "react-icons/ci";

function CategoryWise() {
  const { productCategories, products, selectedCategory } = useSelector(
    (store) => store.product
  );
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const getCategoryCount = (category) => {
    return products.filter((item) => item.category == category).length;
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredByCategory =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const filteredProducts = !search
    ? filteredByCategory
    : filteredByCategory.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
  return (
    <section className="px-1 ">
      <div className="flex justify-center mb-5">
        <input
          className="search pl-4"
          type="text"
          placeholder="Search for Items"
          value={search}
          onChange={handleSearch}
        />
      </div>

      <ul className="flex justify-around mb-5 text-[12px]">
        <li
          className={selectedCategory === "All" ? "selected-category" : ""}
          onClick={() => dispatch(SELECT_CATEGORY("All"))}
        >
          All{" "}
          <span
            className={`category-count ${
              selectedCategory === "All" && "selected-category-count"
            }`}
          >
            {products.length}
          </span>
        </li>
        {productCategories.map((category) => (
          <li
            className={`text-[#616161] ${
              selectedCategory === category && "selected-category"
            }`}
            onClick={() => dispatch(SELECT_CATEGORY(category))}
            key={category}
          >
            {category}{" "}
            <span
              className={`category-count font-bold ${
                selectedCategory === category && "selected-category-count"
              }`}
            >
              {getCategoryCount(category)}
            </span>
          </li>
        ))}
      </ul>

      <ul className="grid grid-cols-2 gap-2 place-items-center">
        {filteredProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </ul>

      <div className="w-full h-[140px]"></div>
    </section>
  );
}

export default CategoryWise;
