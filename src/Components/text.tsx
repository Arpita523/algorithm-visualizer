
// interface Algorithm{
//   category: string;
//   title : string;
//   description : string;
//   tags: string[];
//   timeComplexity: string
//   spaceComplexity: string;
// }

// const defaultAlgorithms: Algorithm[] = [
//   {
//     title: 'Bubble Sort',
//     category: 'sorting',
//     description: 'A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements...',
//     timeComplexity: 'O(n²)',
//     spaceComplexity: 'O(1)',
//     tags: ['array', 'sorting', 'comparison']
//   },
//   {
//     title: 'Binary Search',
//     category: 'searching',
//     description: 'A search algorithm that finds the position of a target value within a sorted array. Note: Input...',
//     timeComplexity: 'O(log n)',
//     spaceComplexity: 'O(1)',
//     tags: ['array', 'searching', 'divide-and-conquer']
//   },
//   {
//     title: 'Find Duplicates',
//     category: 'searching',
//     description: 'Find all duplicate numbers in an array using constant extra space.',
//     timeComplexity: 'O(n)',
//     spaceComplexity: 'O(1)',
//     tags: ['array', 'hash', 'space optimization']
//   },
//   {
//     title: 'Merge Sort',
//     category: 'sorting',
//     description: 'A divide-and-conquer sorting algorithm that recursively divides the array and merges sorted...',
//     timeComplexity: 'O(n log n)',
//     spaceComplexity: 'O(n)',
//     tags: ['array', 'sorting', 'divide-and-conquer', 'recursion']
//   },
//   {
//     title: 'Tower of Hanoi',
//     category: 'dynamic',
//     description: 'Solve the classic Tower of Hanoi puzzle using recursion.',
//     timeComplexity: 'O(2^n)',
//     spaceComplexity: 'O(n)',
//     tags: ['recursion', 'mathematical', 'puzzle']
//   },
//   {
//     title: 'Quick Sort',
//     category: 'sorting',
//     description: 'A highly efficient sorting algorithm using divide-and-conquer strategy with a pivot element.',
//     timeComplexity: 'O(n log n)',
//     spaceComplexity: 'O(log n)',
//     tags: ['array', 'sorting', 'divide-and-conquer', 'partition']
//   },
//   {
//     title: "Kadane's Algorithm",
//     category: 'dynamic',
//     description: 'Find the maximum sum of a contiguous subarray within a one-dimensional array.',
//     timeComplexity: 'O(n)',
//     spaceComplexity: 'O(1)',
//     tags: ['array', 'dynamic-programming', 'optimization']
//   }
// ];
// const categoryColors: { [key: string]: string } = {
//   'sorting': 'bg-blue-100 text-blue-800',
//   'searching': 'bg-green-100 text-green-800',
//   'dynamic': 'bg-pink-100 text-pink-800',
//   'recursion': 'bg-orange-100 text-blue-800',
// }
// const AlgorithmCard: React.FC<{algorithms?: Algorithm[]}> = ({algorithms = defaultAlgorithms}) => {
//   return (
//   <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12 top-[-350px]">
//     <div className="mx-auto  max-w-screen-xl px-4 w-full">

//     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
//       {algorithms.map((algo, index) => (
//         <div 
//         key={index} 
//         className="bg-white rounded-xl shadow-md hover:shadow-lg transform hover:translate-y-2 transition-all duration-300 p-4">
//           <div className="flex justify-between items-center mb-2">
//             <h3 className="text-xl font-semibold">{algo.title}</h3>
//             <span className={`px-2 py-1 rounded-full text-xs ${categoryColors[algo.category]}`}>
//             {algo.category}
//             </span>
//           </div>
//           <p className=" text-sm text-gray-500 mb-4">{algo.description}</p>
//           <div className="flex items-center justify-between">
//             <div className="flex space-x-2">
//               {algo.tags.map((tag, tagIndex) => (
//                 <span key={tagIndex} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full mb-5">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//             <button className="text-blue-600 hover:text-blue-800 text-sm"> → </button>
//           </div>
//           <div className="mt-4 flex justify-between text-sm">
//             <div className="flex items-center space-x-1">
//               <span className="text-gray-500">⏱️</span>
//               <span className="font-medium">{algo.timeComplexity}</span>
//             </div>
//             <div className="flex items-center space-x-1">
//               <span className="text-gray-500">💾</span>
//               <span className="font-medium">{algo.spaceComplexity}</span>
//             </div>
//           </div>
//         </div>
//       ))}
// </div>
//     </div>
// </div>











//   // <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12 top-[-350px]">
//   //   <div className="mx-auto max-w-screen-xl px-4 w-full">
//   //     <div className="grid w-full sm:grid-cols-2 xl:grid-cols-3 gap-6">
//   //       <div className="bg-white h-56 relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-2 transition-all duration-300 max-w-sm">
//   //         <button
//   //         type="button"
//   //         className="absolute top-2 right-2 text-white bg-green-300 hover:bg-green-400 focus:outline-none focus:ring-4 focus:ring-offset-green-300 font-medium rounded-full text-sm px-5 py-2.5"
//   //         >
//   //           Searching
//   //         </button>
//   //         <div className="h-auto overflow-hidden">
//   //           <div className="bg-white py-4 px-3">
//   //             <h3 className="text-xl mb-2 font-medium font-serif">Find Duplicates.</h3>
//   //             <div className="flex justify-between items-center">
//   //               <p className="mt-3 text-xs text-blue-950 font-serif">
//   //                 Find all duplicate numbers in an array using constant extra space.
//   //               </p>
//   //               <div className="relative z-40 flex items-center gap-2"></div>
//   //             </div>
//   //           </div>
//   //         </div>
//   //         </div>

//   //       </div>
//   //     </div>
//   //   </div>
 


    
//   )
// }




// // ======= ORIGINAL CODE ===========>>>>>>>>>


// // const AlgorithmCard: React.FC<AlgorithmCardProps> = () => {
// //   return (
// //     <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12 top-[-350px]">
// //       <div className="mx-auto max-w-screen-xl px-4 w-full">
// //         <div className="grid w-full sm:grid-cols-2 xl:grid-cols-3 gap-6">
// //           <div className="bg-white h-56 relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-2 transition-all duration-300 max-w-sm">
// //             <button
// //               type="button"
// //               className="absolute top-2 right-2 text-white bg-green-300 hover:bg-green-400 focus:outline-none focus:ring-4 focus:ring-offset-green-300 font-medium rounded-full text-sm px-5 py-2.5"
// //             >
// //               Searching
// //             </button>
// //             <div className="h-auto overflow-hidden">
// //               <div className="bg-white py-4 px-3">
// //                 <h3 className="text-xl mb-2 font-medium font-serif">Find Duplicates.</h3>
// //                 <div className="flex justify-between items-center">
// //                   <p className="mt-3 text-xs text-blue-950 font-serif">
// //                     Find all duplicate numbers in an array using constant extra space.
// //                   </p>
// //                   <div className="relative z-40 flex items-center gap-2"></div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="bg-white relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-2 transition-all duration-300 max-w-sm">
// //             <button
// //               type="button"
// //               className="absolute top-2 right-2 text-white bg-green-300 hover:bg-green-400 focus:outline-none focus:ring-4 focus:ring-offset-green-300 font-medium rounded-full text-sm px-5 py-2.5"
// //             >
// //               Searching
// //             </button>
// //             <div className="h-auto overflow-hidden">
// //               <div className="bg-white py-4 px-3">
// //                 <h3 className="text-xl mb-2 font-medium font-serif">Find Duplicates.</h3>
// //                 <div className="flex justify-between items-center">
// //                   <p className="mt-3 text-xs text-blue-950 font-serif">
// //                     Find all duplicate numbers in an array using constant extra space.
// //                   </p>
// //                   <div className="relative z-40 flex items-center gap-2"></div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="bg-white relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-2 transition-all duration-300 max-w-sm">
// //             <button
// //               type="button"
// //               className="absolute top-2 right-2 text-white bg-green-300 hover:bg-green-400 focus:outline-none focus:ring-4 focus:ring-offset-green-300 font-medium rounded-full text-sm px-5 py-2.5"
// //             >
// //               Searching
// //             </button>
// //             <div className="h-auto overflow-hidden">
// //               <div className="bg-white py-4 px-3">
// //                 <h3 className="text-xl mb-2 font-medium font-serif">Find Duplicates.</h3>
// //                 <div className="flex justify-between items-center">
// //                   <p className="mt-3 text-xs text-blue-950 font-serif">
// //                     Find all duplicate numbers in an array using constant extra space.
// //                   </p>
// //                   <div className="relative z-40 flex items-center gap-2"></div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="bg-white h-56 relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-2 transition-all duration-300 max-w-sm">
// //             <button
// //               type="button"
// //               className="absolute top-2 right-2 text-white bg-green-300 hover:bg-green-400 focus:outline-none focus:ring-4 focus:ring-offset-green-300 font-medium rounded-full text-sm px-5 py-2.5"
// //             >
// //               Searching
// //             </button>
// //             <div className="h-auto overflow-hidden">
// //               <div className="bg-white py-4 px-3">
// //                 <h3 className="text-xl mb-2 font-medium font-serif">Find Duplicates.</h3>
// //                 <div className="flex justify-between items-center">
// //                   <p className="mt-3 text-xs text-blue-950 font-serif">
// //                     Find all duplicate numbers in an array using constant extra space.
// //                   </p>
// //                   <div className="relative z-40 flex items-center gap-2"></div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="bg-white relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-2 transition-all duration-300 max-w-sm">
// //             <button
// //               type="button"
// //               className="absolute top-2 right-2 text-white bg-green-300 hover:bg-green-400 focus:outline-none focus:ring-4 focus:ring-offset-green-300 font-medium rounded-full text-sm px-5 py-2.5"
// //             >
// //               Searching
// //             </button>
// //             <div className="h-auto overflow-hidden">
// //               <div className="bg-white py-4 px-3">
// //                 <h3 className="text-xl mb-2 font-medium font-serif">Find Duplicates.</h3>
// //                 <div className="flex justify-between items-center">
// //                   <p className="mt-3 text-xs text-blue-950 font-serif">
// //                     Find all duplicate numbers in an array using constant extra space.
// //                   </p>
// //                   <div className="relative z-40 flex items-center gap-2"></div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="bg-white relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-2 transition-all duration-300 max-w-sm">
// //             <button
// //               type="button"
// //               className="absolute top-2 right-2 text-white bg-green-300 hover:bg-green-400 focus:outline-none focus:ring-4 focus:ring-offset-green-300 font-medium rounded-full text-sm px-5 py-2.5"
// //             >
// //               Searching
// //             </button>
// //             <div className="h-auto overflow-hidden">
// //               <div className="bg-white py-4 px-3">
// //                 <h3 className="text-xl mb-2 font-medium font-serif">Find Duplicates.</h3>
// //                 <div className="flex justify-between items-center">
// //                   <p className="mt-3 text-xs text-blue-950 font-serif">
// //                     Find all duplicate numbers in an array using constant extra space.
// //                   </p>
// //                   <div className="relative z-40 flex items-center gap-2"></div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="bg-white  h-56 relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-2 transition-all duration-300 max-w-sm">
// //             <button
// //               type="button"
// //               className="absolute top-2 right-2 text-white bg-green-300 hover:bg-green-400 focus:outline-none focus:ring-4 focus:ring-offset-green-300 font-medium rounded-full text-sm px-5 py-2.5"
// //             >
// //               Searching
// //             </button>
// //             <div className="h-auto overflow-hidden">
// //               <div className="bg-white py-4 px-3">
// //                 <h3 className="text-xl mb-2 font-medium font-serif">Find Duplicates.</h3>
// //                 <div className="flex justify-between items-center">
// //                   <p className="mt-3 text-xs text-blue-950 font-serif">
// //                     Find all duplicate numbers in an array using constant extra space.
// //                   </p>
// //                   <div className="relative z-40 flex items-center gap-2"></div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// export default AlgorithmCard;




