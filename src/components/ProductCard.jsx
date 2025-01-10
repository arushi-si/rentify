import { useDispatch, useSelector } from "react-redux";
import Counter from "./Counter";
import {
  INCREASE_COUNT,
  SELECT_PRODUCT,
  DECREASE_COUNT,
} from "../store/productSlice";
import { confirmUser } from "./Modal";

function ProductCard({ product }) {
  const selectedProduct = useSelector((store) =>
    store.product.selectedProducts.find((item) => item.name === product.name)
  );

  const dispatch = useDispatch();

  return (
    <li key={product.name}>
      <img
        className="w-[164px] h-[110px] rounded-t-md"
        src={product.imageUrl}
      />
      <div className="flex justify-between items-center rounded-b-md p-2 border-t-0 border-[#C3C3C3] border-[1px]">
        <h2 className="text-[#2F2F2F]  items-center font-bold text-[10px]">
          {product.name}
        </h2>
        {selectedProduct ? (
          <Counter
            increment={() => dispatch(INCREASE_COUNT(product.name))}
            value={selectedProduct.count}
            decrement={() => {
              if (selectedProduct.count === 1) {
                confirmUser({
                  onConfirm: () => {
                    dispatch(DECREASE_COUNT(product.name));
                  },
                });
                return;
              }
              dispatch(DECREASE_COUNT(product.name));
            }}
          />
        ) : (
          <button
            className="text-[12px] text-[#2B80FF]"
            onClick={() => dispatch(SELECT_PRODUCT({ ...product, count: 1 }))}
          >
            Add
          </button>
        )}
      </div>
    </li>
  );
}

export default ProductCard;
