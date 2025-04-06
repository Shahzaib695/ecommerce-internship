import Image from "next/image";
import React from "react";

const Electronicandgadget = () => {
  const items = [
    { title: "Smart Watch", price: "From USD 19", image: "/watch.png" },
    { title: "Camera", price: "From USD 19", image: "/camera.png" },
     { title: "Headphones", price: "From USD 19", image: "/wirelessheadphone.png" },
     { title: "Smart watches", price: "From USD 19", image: "/smatches.png" },
     { title: "Gaming Sets", price: "From USD 100", image: "/headphone.png" },
     { title: "Laptop & PC ", price: "From USD 39", image: "/laptop.png" },
     { title: "Smart Phones", price: "From USD 19", image: "/phone.png" },
     { title: "Electric Kettle", price: "From USD 10", image: "/kattle.png" },
  ];

  return (
    <div className="container p-2 text-black bg-white mx-auto mt-9">
      <div className="grid lg:grid-cols-3 ">
        <div
          className="p-5 flex flex-col justify-center items-start rounded-lg"
          style={{
            backgroundImage: "url('/electronicbg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Consumer Electronics and Gadgets</h2>
          <button className="bg-white text-black px-5 py-2 rounded">
            Source now
          </button>
        </div>
        <div className="p-2 lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4 text-black">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white flex flex-col items-center text-center border border-gray-200 text-black rounded-lg"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className="rounded-md object-cover mb-4"
              />
              <h3 className="font-medium text-lg">{item.title}</h3>
              <p className="text-sm">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Electronicandgadget;
