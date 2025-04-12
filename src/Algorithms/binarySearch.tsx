import { useState } from "react";
import CommonFuncUICard from "../Components/General";

const BinarySearch = () => {
    const [searchValue, setSearchValue] = useState<number>(0);
    const [showOutput, setShowOutput] = useState<boolean>(false);
    
    // Implementation of Binary Search algorithm
    const runBinarySearch = (array: number[], n: number): { steps: number, foundIndex: number, searchValue: number, sortedArray: number[] } => {
        // For binary search to work correctly, the array needs to be sorted
        const sortedArr = [...array].sort((a, b) => a - b);
        
        // Set target value to search for (using the 'n' parameter or default to first element)
        const target = n || (sortedArr.length > 0 ? sortedArr[0] : 0);
        setSearchValue(target);
        
        let left = 0;
        let right = sortedArr.length - 1;
        let steps = 0;
        
        // Main binary search logic
        while (left <= right) {
            steps++;
            
            // Find the middle index
            const mid = Math.floor((left + right) / 2);
            
            // Check if target is present at mid
            if (sortedArr[mid] === target) {
                setShowOutput(true);
                return { steps, foundIndex: mid, searchValue: target, sortedArray: sortedArr };
            }
            
            // If target is greater, ignore left half
            if (sortedArr[mid] < target) {
                left = mid + 1;
            } 
            // If target is smaller, ignore right half
            else {
                right = mid - 1;
            }
        }
        
        // Element not present in array
        setShowOutput(true);
        return { steps, foundIndex: -1, searchValue: target, sortedArray: sortedArr };
    };

    // Render the result for Binary Search
    const renderBinarySearchResult = (result: { steps: number, foundIndex: number, searchValue: number, sortedArray: number[] }, n: number) => {
        if (!showOutput) {
            return null;
        }

        return (
            <div>
                {result.foundIndex === -1 ? (
                    <div className="bg-amber-100 p-4 rounded-lg mb-6">
                        <p className="text-amber-800 font-semibold">
                            Element {result.searchValue} not found in the array
                        </p>
                        <p className="font-medium mt-2">
                            Search completed in {result.steps} steps
                        </p>
                        <p className="text-gray-600 mt-2 text-sm">
                            Binary search has a time complexity of O(log n) and requires a sorted array.
                        </p>
                    </div>
                ) : null}

                <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">Search Details</h3>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <p><span className="font-semibold">Search value:</span> {result.searchValue}</p>
                        <p><span className="font-semibold">Result:</span> {result.foundIndex !== -1 
                            ? `Found at index ${result.foundIndex}` 
                            : "Not found"}</p>
                        <p><span className="font-semibold">Steps required:</span> {result.steps}</p>
                    </div>
                </div>

                {showOutput && (
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-2">Output Array</h3>
                        <div className="flex flex-wrap gap-2">
                            {result.sortedArray.map((num, index) => (
                                <div key={index} className="bg-green-100 text-green-700 font-bold py-2 px-4 rounded">
                                    {num}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    };

    // Custom handler for running the algorithm
    const handleRunAlgorithm = (runAlgorithmFn: Function) => {
        setShowOutput(true);
        runAlgorithmFn();
    };

    return (
        <CommonFuncUICard 
            name="Binary Search" 
            runAlgorithm={runBinarySearch} 
            renderResult={renderBinarySearchResult}
            onRunAlgorithm={handleRunAlgorithm}
        />
    );
};

export default BinarySearch;