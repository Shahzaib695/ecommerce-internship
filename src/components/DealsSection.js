// "use client";
// import Image from "next/image";
// import { useState, useEffect } from "react";

// const DealsSection = () => {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 4,
//     hours: 13,
//     minutes: 34,
//     seconds: 56,
//   });

//   // Countdown Timer Logic
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prevTime) => {
//         // Check if time is over and stop the timer
//         if (prevTime.days === 0 && prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0) {
//           clearInterval(timer);
//           return prevTime;
//         }

//         let updatedTime = { ...prevTime };

//         if (updatedTime.seconds > 0) {
//           updatedTime.seconds -= 1;
//         } else {
//           updatedTime.seconds = 59;
//           if (updatedTime.minutes > 0) {
//             updatedTime.minutes -= 1;
//           } else {
//             updatedTime.minutes = 59;
//             if (updatedTime.hours > 0) {
//               updatedTime.hours -= 1;
//             } else {
//               updatedTime.hours = 23;
//               updatedTime.days -= 1;
//             }
//           }
//         }
//         return updatedTime;
//       });
//     }, 1000);

//     return () => clearInterval(timer); 
//   }, []);

//   const deals = [
//     {
//       title: "Smart watches",
//       image: "/watch.png",
//       discount: "-25%",
//     },
//     {
//       title: "Laptops",
//       image: "/laptop.png",
//       discount: "-15%",
//     },
//     {
//       title: "GoPro cameras",
//       image: "/camera.png",
//       discount: "-40%",
//     },
//     {
//       title: "Headphones",
//       image: "/headphone.png",
//       discount: "-25%",
//     },
//     {
//       title: "Canon cameras",
//       image: "/Canon.png",
//       discount: "-25%",
//     },
//   ];

//   return (
//     <div className="container  bg-white text-black mx-auto  ">
//       <div className="grid  grid-cols-1 mt-10 md:grid-cols-3 lg:grid-cols-6 gap-6">
//       <div className="flex flex-col items-center justify-center  mb-4 p-4">
//   <h2 className="text-lg font-semibold mb-2">Deals and offers</h2>
//   <p className="text-base mb-3 text-gray-700">Hygiene equipment</p>
//   <div className="flex gap-2 ml-5 text-center text-white">
//     <div className="bg-gray-800 px-2 py-2 rounded">
//       <p className="text-lg font-bold">{timeLeft.days}</p>
//       <p className="text-xs">Days</p>
//     </div>
//     <div className="bg-gray-800 px-2 py-1 rounded">
//       <p className="text-lg font-bold">{timeLeft.hours}</p>
//       <p className="text-xs">Hours</p>
//     </div>
//     <div className="bg-gray-800 px-2 py-1 rounded">
//       <p className="text-lg font-bold">{timeLeft.minutes}</p>
//       <p className="text-xs">Min</p>
//     </div>
//     <div className="bg-gray-800 px-2 py-1 rounded">
//       <p className="text-lg font-bold">{timeLeft.seconds}</p>
//       <p className="text-xs">Sec</p>
//     </div>
//   </div>
// </div>


//         {deals.map((deal, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center text-center border p-2   "
//           >
//             <Image
//               src={deal.image}
//               alt={deal.title}
//               width={100}
//               height={100}
//               className="object-contain"
//             />
//             <h3 className="mt-2 text-base font-bold">{deal.title}</h3>
//             <p className="text-red-500 mt-1">{deal.discount}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DealsSection;
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const DealsSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 13,
    minutes: 34,
    seconds: 56,
  });

  // Countdown Timer Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        // Check if time is over and stop the timer
        if (prevTime.days === 0 && prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0) {
          clearInterval(timer);
          return prevTime;
        }

        let updatedTime = { ...prevTime };

        if (updatedTime.seconds > 0) {
          updatedTime.seconds -= 1;
        } else {
          updatedTime.seconds = 59;
          if (updatedTime.minutes > 0) {
            updatedTime.minutes -= 1;
          } else {
            updatedTime.minutes = 59;
            if (updatedTime.hours > 0) {
              updatedTime.hours -= 1;
            } else {
              updatedTime.hours = 23;
              updatedTime.days -= 1;
            }
          }
        }
        return updatedTime;
      });
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  const deals = [
    {
      title: "Smart watches",
      image: "/watch.png",
      discount: "-25%",
    },
    {
      title: "Laptops",
      image: "/laptop.png",
      discount: "-15%",
    },
    {
      title: "GoPro cameras",
      image: "/camera.png",
      discount: "-40%",
    },
    {
      title: "Headphones",
      image: "/headphone.png",
      discount: "-25%",
    },
    {
      title: "Canon cameras",
      image: "/Canon.png",
      discount: "-25%",
    },
  ];

  return (
    <div className="mt-10 container bg-white text-black p-5 ">
      <div className="grid  grid-cols-1  md:grid-cols-3 lg:grid-cols-6 gap-6">
      <div className="flex flex-col items-center justify-center  mb-4 p-4">
  <h2 className="text-lg font-semibold mb-2">Deals and offers</h2>
  <p className="text-base mb-3 text-gray-700">Hygiene equipment</p>
  <div className="flex gap-2 ml-5 text-center text-white">
    <div className="bg-gray-800 px-2 py-2 rounded">
      <p className="text-lg font-bold">{timeLeft.days}</p>
      <p className="text-xs">Days</p>
    </div>
    <div className="bg-gray-800 px-2 py-1 rounded">
      <p className="text-lg font-bold">{timeLeft.hours}</p>
      <p className="text-xs">Hours</p>
    </div>
    <div className="bg-gray-800 px-2 py-1 rounded">
      <p className="text-lg font-bold">{timeLeft.minutes}</p>
      <p className="text-xs">Min</p>
    </div>
    <div className="bg-gray-800 px-2 py-1 rounded">
      <p className="text-lg font-bold">{timeLeft.seconds}</p>
      <p className="text-xs">Sec</p>
    </div>
  </div>
</div>


        {deals.map((deal, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center border border-black p-2   "
          >
            <Image
              src={deal.image}
              alt={deal.title}
              width={100}
              height={100}
              className="object-contain"
            />
            <h3 className="mt-2 text-base font-bold">{deal.title}</h3>
            <p className="text-red-500 mt-1">{deal.discount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsSection;
