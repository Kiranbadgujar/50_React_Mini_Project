import React, { useState, useEffect } from "react";

const Typewriter = () => {
  const words = ["Hello, World!", "Welcome to my website!", "This is a typewriter effect."];
  const [currentWord, setCurrentWord] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeEffect = () => {
      const word = words[index];

      if (isDeleting) {
        setCurrentWord(word.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setIndex(prev => (prev + 1) % words.length);
        }
      } else {
        setCurrentWord(word.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);

        if (charIndex === word.length) {
          setIsDeleting(true);
        }
      }
    };

    const timer = setTimeout(typeEffect, 100);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index, words]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1 id="typewriter" className="text-4xl font-bold">{currentWord}</h1>
    </div>
    

    // TypeWriter Effect 1
    // <div class="flex min-h-screen items-center justify-center bg-gradient-to-tr to-blue-700 from-indigo-900 p-10">
    //   <div class="w-max">
    //     <h1 class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">
    //       Hello World
    //     </h1>
    //   </div>
    // </div>
  );
};

export default Typewriter;


//Sticky Notication

// import React, { useState } from 'react';

// const NotificationBanner = () => {
//   const [isVisible, setIsVisible] = useState(true);

//   const handleClose = () => {
//     setIsVisible(false);
//   };

//   if (!isVisible) {
//     return null;
//   }

//   return (
//     <div className="fixed inset-x-0 bottom-0 pb-2 sm:pb-5 z-50">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="rounded-lg bg-indigo-600 p-2 shadow-lg sm:p-3">
//           <div className="flex flex-wrap items-center justify-between">
//             <div className="flex w-0 flex-1 items-center">
//               <span className="flex rounded-lg bg-indigo-800 p-2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="2"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                   className="h-6 w-6 text-white"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
//                   />
//                 </svg>
//               </span>
//               <p className="ml-3 truncate font-medium text-white">
//                 <span className="md:hidden">
//                   Save 50% on any plan with Code 'LAUNCH'
//                 </span>
//                 <span className="hidden md:inline">
//                   Launch Month! Use Code 'LAUNCH' to save 50% on any plan!
//                 </span>
//               </p>
//             </div>
//             <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
//               <a
//                 className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
//                 href="#"
//               >
//                 Get Started
//               </a>
//             </div>
//             <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
//               <button
//                 type="button"
//                 className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
//                 onClick={handleClose}
//               >
//                 <span className="sr-only">Dismiss</span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                   aria-hidden="true"
//                   className="h-6 w-6 text-white"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NotificationBanner;
