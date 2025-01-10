import { useSelector } from "react-redux";

function ViewSelectedProducts({ closeOverlay }) {
  const { selectedProducts } = useSelector((store) => store.product);

  return (
    <section className="absolute flex flex-col bottom-0 z-10 top-0 left-0 right-0">
      <div
        className="bg-black bg-opacity-50 flex-1"
        onClick={() => closeOverlay(false)}
      ></div>
      <div className="bg-white">
        <div className="w-[87px] rounded-lg h-1 bg-[#D9D9D9] mt-3 mx-auto"></div>
        <h1 className="text-center font-bold my-5">Added Items</h1>
        <ul className="mx-5">
          {selectedProducts.map((product) => (
            <li className="flex justify-between mb-5" key={product.name}>
              <div className="flex">
                <img
                  src="https://picsum.photos/200/300"
                  className="w-5 h-5 rounded-full mr-3"
                />
                <p>{product.name}</p>
              </div>
              <p className="text-sm text-[#616161]">{product.count}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ViewSelectedProducts;
