import { useNavigate } from "react-router-dom";

const MergeSortSource = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/merge-sort');
    }

    return (
        <div className="min-h-screen bg-gray-900 p-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold font-serif">Merge Sort</h2>
                    <button onClick={handleBack}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded flex items-center">
                            <span className="mr-2">←</span>
                            <span>Hide Source</span>
                    </button>
                </div>
                <div className="mb-8 bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Key Learnings</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Divide and Conquer approach to solving the problem</li>
                        <li>Time complexity: O(n log n) for sorting</li>
                        <li>Space complexity: O(n) due to additional space for merging</li>
                        <li>Recursive breakdown of the problem</li>
                    </ul>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Problem Statement</h3>
                    <p>Merge Sort is a classic sorting algorithm that works by dividing an array into two halves, sorting each half, and then merging the sorted halves back together.</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Recursive division of the array into smaller subarrays.</li>
                        <li>Each subarray is sorted, and the sorted subarrays are merged into a single sorted array.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Implementation</h3>
                    <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                        <pre className="whitespace-pre-wrap">
                            {`function mergeSort(array) {
  if (array.length <= 1) return array;
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  
  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}`}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MergeSortSource;
