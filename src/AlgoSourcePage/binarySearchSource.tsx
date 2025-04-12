import { useNavigate } from "react-router-dom"

const BinarySearchSource = () => {
    const navigate = useNavigate()

    const handleBack = () => {
        navigate('/binary-search')
    }
    return(
        <div className="min-h-screen bg-gray-900 p-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold font-serif">Binary Search</h2>
                    <button onClick={handleBack}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded flex items-center">
                            <span className="mr-2">←</span>
                            <span>Hide Source</span>
                    </button>
                </div>
                <div className="mb-8 bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Key Learnings</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Divide and conquer approach</li>
                        <li>Logarithmic time complexity O(log n)</li>
                        <li>Requires sorted data</li>
                        <li>Efficient search algorithm for large datasets</li>
                    </ul>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Problem Statement</h3>
                    <p>
                        Binary Search is an efficient algorithm for finding a target value within a sorted array. 
                        It works by repeatedly dividing the search interval in half. The key characteristics of binary search are:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                         <li>The array must be sorted before applying binary search.</li>
                         <li>It compares the target value to the middle element of the array.</li>
                         <li>If they match, the search is complete. If not, the search continues in the left or right half.</li>
                         <li>With each step, the algorithm eliminates half of the remaining elements.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Implementation</h3>
                    <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                        <pre className="whitespace-pre-wrap">
                            {`function binarySearch(arr, target) {
  // Sort the array first to ensure binary search works correctly
  arr.sort((a, b) => a - b);
  
  let left = 0;
  let right = arr.length - 1;
  let steps = 0;
  
  while (left <= right) {
    steps++;
    
    // Find the middle index
    const mid = Math.floor((left + right) / 2);
    
    // Check if target is present at mid
    if (arr[mid] === target) {
      return { found: true, index: mid, steps };
    }
    
    // If target is greater, ignore left half
    if (arr[mid] < target) {
      left = mid + 1;
    } 
    // If target is smaller, ignore right half
    else {
      right = mid - 1;
    }
  }
  
  // Element is not present in array
  return { found: false, index: -1, steps };
}

// Binary search can also be implemented recursively:
/*
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1, steps = 0) {
  // Base condition: element not found
  if (left > right) {
    return { found: false, index: -1, steps };
  }
  
  steps++;
  const mid = Math.floor((left + right) / 2);
  
  // Element found at mid
  if (arr[mid] === target) {
    return { found: true, index: mid, steps };
  }
  
  // Search in left or right half based on comparison
  if (arr[mid] > target) {
    return binarySearchRecursive(arr, target, left, mid - 1, steps);
  } else {
    return binarySearchRecursive(arr, target, mid + 1, right, steps);
  }
}
*/`}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BinarySearchSource