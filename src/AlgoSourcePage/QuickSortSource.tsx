import { useNavigate } from "react-router-dom";

const QuickSortSource = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/quick-sort');
    };

    return (
        <div className="min-h-screen bg-gray-900 p-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold font-serif">Quick Sort Source</h2>
                    <button onClick={handleBack}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded flex items-center">
                            <span className="mr-2">←</span>
                            <span>Hide Source</span>
                    </button>
                </div>

                <div className="mb-8 bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Key Learnings</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Divide and Conquer algorithm strategy</li>
                        <li>Partitioning techniques with pivot selection</li>
                        <li>In-place sorting for memory efficiency</li>
                        <li>O(n log n) average-case time complexity</li>
                        <li>Recursive implementation and optimization techniques</li>
                        <li>Understanding best, average, and worst-case scenarios</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Problem Statement</h3>
                    <p className="mb-4">
                        Given an array of unsorted numbers, arrange them in ascending order using the Quick Sort algorithm. 
                        Quick Sort is a highly efficient, comparison-based, divide and conquer sorting algorithm.
                    </p>
                    <p>
                        The algorithm selects a 'pivot' element from the array and partitions the other elements into two sub-arrays, 
                        according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.
                    </p>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Quick Sort Implementation</h3>
                    <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                        <pre className="whitespace-pre-wrap">
{`function quickSort(arr) {
  // Base case: arrays with 0 or 1 element are already sorted
  if (arr.length <= 1) {
    return arr;
  }
  
  // Choose a pivot (here we select the last element)
  const pivot = arr[arr.length - 1];
  
  // Partition the array into elements less than and greater than pivot
  const left = [];
  const right = [];
  
  // Loop through all elements except the pivot
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  
  // Recursively sort the sub-arrays and combine with pivot
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Time Complexity:
// - Best/Average Case: O(n log n)
// - Worst Case: O(n²) - occurs when the array is already sorted or reverse sorted
// Space Complexity: O(log n) average case for recursion stack`}
                        </pre>
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">In-Place Implementation with Lomuto Partition</h3>
                    <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                        <pre className="whitespace-pre-wrap">
{`function quickSortInPlace(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    // Get the partition index
    const pivotIndex = partition(arr, low, high);
    
    // Recursively sort elements before and after partition
    quickSortInPlace(arr, low, pivotIndex - 1);
    quickSortInPlace(arr, pivotIndex + 1, high);
  }
  
  return arr;
}

function partition(arr, low, high) {
  // Choose the rightmost element as pivot
  const pivot = arr[high];
  
  // Index of smaller element
  let i = low - 1;
  
  for (let j = low; j < high; j++) {
    // If current element is smaller than the pivot
    if (arr[j] < pivot) {
      i++;
      // Swap arr[i] and arr[j]
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  // Swap pivot (arr[high]) with the element at i+1
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  
  // Return the partition index
  return i + 1;
}

// This implementation sorts the array in-place, which is more memory efficient`}
                        </pre>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Optimization Techniques</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><span className="font-medium">Random Pivot Selection:</span> Helps avoid worst-case scenarios in already sorted arrays</li>
                        <li><span className="font-medium">Median-of-Three:</span> Choose the median of first, middle, and last elements as pivot</li>
                        <li><span className="font-medium">Insertion Sort for Small Arrays:</span> Switch to insertion sort for small subarrays</li>
                        <li><span className="font-medium">Tail Call Elimination:</span> Optimize recursion by sorting smaller partition first</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default QuickSortSource;