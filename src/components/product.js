import Image from "next/image";
const products = [
  { id: 1, name: "T-shirts with multiple colors, for men", price: "$10.30", image: "/bluesh.png" },
  { id: 2, name: "Jeans shorts for men blue color", price: "$10.30", image: "/jack.png" },
  { id: 3, name: "Brown winter coat medium size", price: "$12.50", image: "/coat.png" },
  { id: 4, name: "Jeans bag for travel for men", price: "$34.40", image: "/wallet.png" },
  { id: 5, name: "Leather wallet", price: "$19.00", image: "/bag.png" },
  { id: 6, name: "Canon camera black, 100x zoom", price: "$9.99", image: "/shorts.png" },
  { id: 7, name: "Headset for gaming with mic", price: "$8.99", image: "/wirelessheadphone.png" },
  { id: 8, name: "Smartwatch silver color modern", price: "$10.30", image: "/bag.png" },
  { id: 9, name: "Jeans bag for men leather material", price: "$10.30", image: "/smartwatches.png" },
  { id: 10, name: "Blue wallet for men", price: "$8.95", image: "/smatches.png" },
];

const ProductPage = () => {
  return (
    <div className="p-2">
      <h2 className="text-2xl font-bold text-gray-800 mt-2 mb-4">Recommended Items</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-3"
          >
            <div className="relative  h-24 mb-2 overflow-hidden rounded-lg">
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: "contain" }}
                className="rounded-lg"
              />
            </div>
            <p className="text-xl font-bold text-black border border-black  hover:bg-black hover:text-white text-center mt-2 mb-1">{product.price}</p>
            <h3 className="text-base font-medium text-black ">
            {product.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
