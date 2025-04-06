import React from "react";
import Image from "next/image";

const services = [
  {
    image: "/industry.png",
    title: "Source from Industry Hubs",
  },
  {
    image: "/products.png",
    title: "Customize Your Products",
  },
  {
    image: "/fast.png",
    title: "Fast, reliable shipping by ocean or air",
  },
  {
    image: "/inspection.png",
    title: "Product monitoring and inspection",
  },
];


const regions = [
  { image: "/uae.png", name: "Arabic Emirates", url: "shopname.ae" },
  { image: "/aus.png", name: "Australia", url: "shopname.com.au" },
  { image: "/us.png", name: "United States", url: "shopname.us" },
  { image: "/russia.png", name: "Russia", url: "shopname.ru" },
  { image: "/italy.png", name: "Italy", url: "shopname.it" },
  { image: "/denmark.png", name: "Denmark", url: "denmark.com.dk" },
  { image: "/france.png", name: "France", url: "shopname.com.fr" },
  { image: "/uae.png", name: "Arabic Emirates", url: "shopname.co.uk" },
  { image: "/china.png", name: "China", url: "shopname.cn" },
  { image: "/uk.png", name: "Great Britain", url: "shopname.co.uk" },


];

const Lastsection = () => {
  return (
    <div className="p-4 text-black">
      <section className="mb-3">
        <h2 className="text-xl font-bold mb-3">Our extra services</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-2"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={300}
                style={{ objectFit: "contain" }}
              
              />
              <p className="font-semibold">{service.title}</p>
            </div>
          ))}
        </div>
      </section>
      <h2 className="text-xl font-bold mb-3">Suppliers by region</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 text-black">
        {regions.map((region, index) => (
          <div
            key={index}
            className="flex  text-black  items-center gap-4 p-2 mt-5"
          >
            <Image
              src={region.image}
              alt={region.name}
              width={50}
              height={50}
              className="rounded-md"
            />
            <div>
              <p className="font-medium" >{region.name}</p>
              <p className="text-sm ">{region.url}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lastsection;
