import { useNavigate } from "react-router-dom";
import algoListData from "./AlgoCardList.json"

interface Algorithm {
  category: string;
  title: string;
  description: string;
  tags: string[];
  timeComplexity: string;
  spaceComplexity: string;
}

// const defaultAlgorithms: Algorithm[] = [
//   {
//     title: "Tower of Hanoi",
//     category: "Recursion",
//     description: "There are three towers. The objective of the game is to move all the disks over to tower #3, but you can't place a larger disk onto a smaller disk.",
//     timeComplexity: "O(2ⁿ)",
//     spaceComplexity: "O(1)",
//     tags: ["algorithm", "maths", "numbers", "recursion"],
//   },
//   {
//     title: "Binary Search",
//     category: "searching",
//     description:
//       "A search algorithm that finds the position of a target value within a sorted array. Note: Input...",
//     timeComplexity: "O(log n)",
//     spaceComplexity: "O(1)",
//     tags: ["array", "searching", "divide-and-conquer"],
//   },
//   {
//     title: "Find Duplicates",
//     category: "searching",
//     description: "Find all duplicate numbers in an array using constant extra space.",
//     timeComplexity: "O(n)",
//     spaceComplexity: "O(1)",
//     tags: ["array", "hash", "space optimization"],
//   },
//   {
//     title: "Merge Sort",
//     category: "sorting",
//     description:
//       "A divide-and-conquer sorting algorithm that recursively divides the array and merges sorted...",
//     timeComplexity: "O(n log n)",
//     spaceComplexity: "O(n)",
//     tags: ["array", "sorting", "divide-and-conquer", "recursion"],
//   },
//   {
//     title: "Tower of Hanoi",
//     category: "dynamic",
//     description: "Solve the classic Tower of Hanoi puzzle using recursion.",
//     timeComplexity: "O(2^n)",
//     spaceComplexity: "O(n)",
//     tags: ["recursion", "mathematical", "puzzle"],
//   },
//   {
//     title: "Quick Sort",
//     category: "sorting",
//     description:
//       "A highly efficient sorting algorithm using divide-and-conquer strategy with a pivot element.",
//     timeComplexity: "O(n log n)",
//     spaceComplexity: "O(log n)",
//     tags: ["array", "sorting", "divide-and-conquer", "partition"],
//   },
//   {
//     title: "Kadane's Algorithm",
//     category: "dynamic",
//     description:
//       "Find the maximum sum of a contiguous subarray within a one-dimensional array.",
//     timeComplexity: "O(n)",
//     spaceComplexity: "O(1)",
//     tags: ["array", "dynamic-programming", "optimization"],
//   },
// ];

const categoryColors: { [key: string]: string } = {
  sorting: "bg-blue-100 text-blue-800",
  searching: "bg-green-100 text-green-800",
  dynamic: "bg-pink-100 text-pink-800",
  Recursion: "bg-orange-100 text-blue-800",
};

const AlgorithmCard: React.FC<{ algorithms?: Algorithm[] }> = ({
  algorithms = algoListData,
}) => {
    const navigate = useNavigate();
    const handleNavigate = (title : string) => {
        const slug  = title.toLowerCase().replace(/ /g, "-");
        navigate(`/${slug}`)
    }
    
   
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12 top-[-350px]">
      <div className="mx-auto max-w-screen-xl px-4 w-full">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {algorithms.map((algo, index) => (
            <div key={index}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transform hover:translate-y-2 transition-all duration-300 p-4"
                onClick={() => handleNavigate(algo.title)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">{algo.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${categoryColors[algo.category]}`}>
                      {algo.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{algo.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {algo.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full mb-5">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 text-sm"> → </button>
                  </div>
                  <div className="mt-4 flex justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <span className="text-gray-500">⏱️</span>
                      <span className="font-medium">{algo.timeComplexity}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="text-gray-500">💾</span>
                      <span className="font-medium">{algo.spaceComplexity}</span>
                    </div>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlgorithmCard;
