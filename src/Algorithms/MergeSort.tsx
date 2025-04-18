import CommonFuncUICard from "../Components/General";

// Merge Sort Algorithm
const mergeSort = (array: number[]): number[] => {
    if (array.length <= 1) return array;

    // Split the array into two halves
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    // Recursively sort each half
    return merge(mergeSort(left), mergeSort(right));
};

// Merge helper function to merge two sorted arrays
const merge = (left: number[], right: number[]): number[] => {
    let result: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Merge the two sorted arrays into one sorted array
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // If there are remaining elements in either array, add them
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
};

// Render the result for Merge Sort
const renderMergeSortResult = (result: number[], inputSize: number) => {
    return (
        <div>
            <div className="bg-blue-100 p-4 rounded-lg mb-6">
                <p className="text-blue-800 font-semibold">
                    Sorted Array (Input size: {inputSize}): 
                    <span className="text-xl font-bold ml-2">{result.join(', ')}</span>
                </p>
            </div>
        </div>
    );
};

const MergeSort = () => {
    return (
        <CommonFuncUICard 
            name="Merge Sort" 
            runAlgorithm={mergeSort} 
            renderResult={renderMergeSortResult}
        />
    );
};

export default MergeSort;
