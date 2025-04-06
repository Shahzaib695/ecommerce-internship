// "use client";

// import { useState } from "react";

// const HomePage = () => {
//   const [form, setForm] = useState({
//     item: "",
//     details: "",
//     quantity: "",
//     unit: "Pcs",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", form);
//   };

//   return (
//     <div
//       className="relative bg-cover bg-center bg-no-repeat p-8 h-screen mt-10 mb-10 lg:py-20"
//       style={{
//         backgroundImage: "url('/Homebg.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="absolute inset-0 bg-blue-900  bg-opacity-75"></div>

//       <div className="relative container mx-auto ">
//         <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 ">
//           <div>
//             <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
//               An easy way to send requests to all suppliers
//             </h2>
//             <p className="text-white text-base font-medium">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt.
//             </p>
//           </div>
//           <div className=" bg-white p-5 lg:p-10 rounded-lg shadow">
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label
//                   htmlFor="item"
//                   className="block text-base font-medium text-gray-700 mb-1"
//                 >
//                   What item you need?
//                 </label>
//                 <input
//                   type="text"
//                   id="item"
//                   name="item"
//                   value={form.item}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded-lg p-3  focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="Enter item name"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="details"
//                   className="block text-base font-medium text-gray-700 mb-1"
//                 >
//                   Type more details
//                 </label>
//                 <textarea
//                   id="details"
//                   name="details"
//                   value={form.details}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded-lg p-3  focus:ring-blue-500 focus:border-blue-500 h-32 resize-none "
//                   placeholder="Enter details"
//                 ></textarea>
//               </div>
//               <div className="flex gap-4">
//                 <div className="w-2/3">
//                   <label
//                     htmlFor="quantity"
//                     className="block text-base font-medium text-gray-700 mb-1"
//                   >
//                     Quantity
//                   </label>
//                   <input
//                     type="number"
//                     id="quantity"
//                     name="quantity"
//                     value={form.quantity}
//                     onChange={handleChange}
//                     className="w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
//                     placeholder="Enter quantity"
//                   />
//                 </div>
//                 <div className="w-1/3">
//                   <label
//                     htmlFor="unit"
//                     className="block text-base font-medium text-gray-700 mb-1"
//                   >
//                     Unit
//                   </label>
//                   <select
//                     id="unit"
//                     name="unit"
//                     value={form.unit}
//                     onChange={handleChange}
//                     className="w-full border border-gray-300 rounded-lg  p-2 focus:ring-blue-500 focus:border-blue-500"
//                   >
//                     <option value="Pcs">Pcs</option>
//                     <option value="Kg">Kg</option>
//                     <option value="Liters">Liters</option>
//                   </select>
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white font-medium p-2 rounded-lg hover:bg-blue-700 transition"
//               >
//                 Send Inquiry
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
"use client";

import { useState } from "react";

const HomePage = () => {
  const [form, setForm] = useState({
    item: "",
    details: "",
    quantity: "",
    unit: "Pcs",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div
      className=" mt-10 relative bg-cover bg-center bg-no-repeat p-6 lg:p-10 h-auto"
      style={{
        backgroundImage: "url('/Homebg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-blue-900 bg-opacity-75"></div>

      <div className="relative container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          {/* Text Section */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              An easy way to send requests to all suppliers
            </h2>
            <p className="text-white text-base font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>

          {/* Form Section */}
          <div className="bg-white p-6 lg:p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="item"
                  className="block text-base font-medium text-gray-700 mb-2"
                >
                  What item do you need?
                </label>
                <input
                  type="text"
                  id="item"
                  name="item"
                  value={form.item}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter item name"
                />
              </div>
              <div>
                <label
                  htmlFor="details"
                  className="block text-base font-medium text-gray-700 mb-2"
                >
                  Type more details
                </label>
                <textarea
                  id="details"
                  name="details"
                  value={form.details}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500 h-28 resize-none"
                  placeholder="Enter details"
                ></textarea>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[50%]">
                  <label
                    htmlFor="quantity"
                    className="block text-base font-medium text-gray-700 mb-2"
                  >
                    Quantity
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={form.quantity}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter quantity"
                  />
                </div>
                <div className="flex-1 min-w-[30%]">
                  <label
                    htmlFor="unit"
                    className="block text-base font-medium text-gray-700 mb-2"
                  >
                    Unit
                  </label>
                  <select
                    id="unit"
                    name="unit"
                    value={form.unit}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="Pcs">Pcs</option>
                    <option value="Kg">Kg</option>
                    <option value="Liters">Liters</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium p-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
