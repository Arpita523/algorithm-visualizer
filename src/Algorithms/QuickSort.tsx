import CommonFuncUICard from "../Components/General";

const QuickSort = () => {
    // Implementation of Quick Sort algorithm
    const runQuickSort = (array: number[], n: number): { steps: { pivot: number, partitionedArray: number[] }[], sortedArray: number[] } => {
        const steps: { pivot: number, partitionedArray: number[] }[] = [];
        const arrayCopy = [...array];
        
        const quickSortWithSteps = (arr: number[], low: number, high: number) => {
            if (low < high) {
                const pivotIndex = partition(arr, low, high);
                
                // Record this step
                steps.push({
                    pivot: arr[pivotIndex],
                    partitionedArray: [...arr]
                });
                
                // Recursively sort the sub-arrays
                quickSortWithSteps(arr, low, pivotIndex - 1);
                quickSortWithSteps(arr, pivotIndex + 1, high);
            }
            return arr;
        };
        
        const partition = (arr: number[], low: number, high: number): number => {
            // Using the last element as the pivot
            const pivot = arr[high];
            let i = low - 1;
            
            for (let j = low; j < high; j++) {
                if (arr[j] <= pivot) {
                    i++;
                    // Swap arr[i] and arr[j]
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
            }
            
            // Swap arr[i+1] and arr[high] (put the pivot in its final sorted position)
            [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
            
            return i + 1;
        };
        
        // Run quicksort on the copied array
        quickSortWithSteps(arrayCopy, 0, arrayCopy.length - 1);
        
        return {
            steps,
            sortedArray: arrayCopy
        };
    };

    // Render the result for Quick Sort
    const renderQuickSortResult = (result: { steps: { pivot: number, partitionedArray: number[] }[], sortedArray: number[] }, inputSize: number) => {
        return (
            <div>
                <div className="bg-green-100 p-4 rounded-lg mb-6">
                    <p className="text-green-800 font-semibold">
                        Quick Sort completed successfully with {result.steps.length} partition steps
                    </p>
                    <p className="text-gray-600 mt-2 text-sm">
                        Quick Sort typically has an average time complexity of O(n log n) and worst-case of O(n²)
                    </p>
                </div>

                <h3 className="text-lg font-semibold mb-2">Sorted Array</h3>
                <div className="overflow-x-auto whitespace-nowrap flex flex-wrap gap-2 p-2 rounded-lg">
                    {result.sortedArray.map((num, index) => (
                        <div key={index} className="bg-green-200 text-green-700 font-bold py-2 px-4 rounded">{num.toString()}</div>
                    ))}
                </div>
                
                <h3 className="text-lg font-semibold mt-6 mb-2">Partition Steps</h3>
                <div className="space-y-4">
                    {result.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="bg-gray-100 p-3 rounded-lg">
                            <p className="font-medium mb-2">Step {stepIndex + 1}: Pivot = {step.pivot}</p>
                            <div className="flex flex-wrap gap-2">
                                {step.partitionedArray.map((num, numIndex) => (
                                    <div 
                                        key={numIndex} 
                                        className={`py-2 px-4 rounded font-bold ${
                                            num === step.pivot ? 'bg-yellow-300 text-yellow-800' : 'bg-blue-200 text-blue-700'
                                        }`}
                                    >
                                        {num.toString()}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <CommonFuncUICard 
            name="Quick Sort" 
            runAlgorithm={runQuickSort} 
            renderResult={renderQuickSortResult}
        />
    );
};

export default QuickSort;