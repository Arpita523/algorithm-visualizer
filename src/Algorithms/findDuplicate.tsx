import CommonFuncUICard from "../Components/General";

const FindDuplicate = () => {
    // Implementation of Find Duplicate algorithm using Set (Method 1)
    const findDuplicateWithSet = (array: number[], n: number): { duplicate: number | null, steps: number, method: string } => {
        // Initialize a visited set to track numbers we've seen
        const seen = new Set<number>();
        let steps = 0;
        let duplicate = null;

        // Iterate through the array
        for (let i = 0; i < array.length; i++) {
            steps++;
            // If we've seen this number before, it's a duplicate
            if (seen.has(array[i])) {
                duplicate = array[i];
                break;
            }
            // Otherwise, add it to our set of seen numbers
            seen.add(array[i]);
        }

        return { duplicate, steps, method: "HashSet" };
    };

    // Implementation of Floyd's Cycle Detection (Tortoise and Hare) for finding duplicates (Method 2)
    const findDuplicateWithFloyd = (array: number[], n: number): { duplicate: number | null, steps: number, method: string } => {
        // Only works if array values are between 1 and n where n is array length
        // This implementation assumes the array contains values in the range [1, n] where n is array length
        // and array has length n+1, thus guaranteeing at least one duplicate
        
        // If array doesn't satisfy these conditions, we'll adjust or return null
        if (array.length === 0) return { duplicate: null, steps: 0, method: "Floyd's Cycle" };
        
        // Validate array values are in expected range
        const inRange = array.every(num => num >= 1 && num <= array.length - 1);
        if (!inRange) {
            // If values aren't in range, use the Set method as fallback
            const result = findDuplicateWithSet(array, n);
            result.method = "Floyd's Cycle (fell back to HashSet)";
            return result;
        }

        let steps = 0;
        let tortoise = array[0];
        let hare = array[0];

        // Phase 1: Find meeting point inside the cycle
        do {
            steps++;
            tortoise = array[tortoise]; // Tortoise moves 1 step
            hare = array[array[hare]];  // Hare moves 2 steps
        } while (tortoise !== hare);

        // Phase 2: Find the entrance to the cycle (the duplicate)
        tortoise = array[0];
        while (tortoise !== hare) {
            steps++;
            tortoise = array[tortoise];
            hare = array[hare];
        }

        return { duplicate: hare, steps, method: "Floyd's Cycle" };
    };

    // Run both algorithms and pick the appropriate result
    const findDuplicate = (array: number[], n: number) => {
        // Check if array has elements that can work with Floyd's algorithm
        const canUseFloyd = array.length > 0 && array.every(num => num >= 1 && num <= array.length - 1);
        
        if (canUseFloyd) {
            return findDuplicateWithFloyd(array, n);
        } else {
            return findDuplicateWithSet(array, n);
        }
    };

    // Render the result for Find Duplicate
    const renderFindDuplicateResult = (result: { duplicate: number | null, steps: number, method: string }, inputSize: number) => {
        return (
            <div>
                <div className="bg-green-100 p-4 rounded-lg mb-6">
                    {result.duplicate !== null ? (
                        <p className="text-green-800 font-semibold">
                            Found duplicate: 
                            <span className="text-xl font-bold ml-2">{result.duplicate}</span>
                        </p>
                    ) : (
                        <p className="text-amber-800 font-semibold">
                            No duplicates found in the array.
                        </p>
                    )}
                    <p className="text-gray-600 mt-2 text-sm">
                        Algorithm completed in {result.steps} steps using {result.method} method.
                    </p>
                </div>

                <h3 className="text-lg font-semibold mb-2">Algorithm Explanation</h3>
                <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-2">
                        Two algorithms are implemented:
                    </p>
                    <p className="text-gray-700 mb-2">
                        <span className="font-semibold">1. HashSet Method:</span> Scans through the array, keeping track of elements it has already seen.
                        When it encounters an element for the second time, it identifies that as a duplicate.
                        This implementation has O(n) time complexity and O(n) space complexity.
                    </p>
                    <p className="text-gray-700">
                        <span className="font-semibold">2. Floyd's Cycle Detection (Tortoise and Hare):</span> Treats the array as a linked list where each value 
                        points to the index of that value. If there's a duplicate, it creates a cycle in this linked list.
                        This method uses two pointers - a slow one (tortoise) and a fast one (hare) to detect the cycle.
                        This implementation has O(n) time complexity but only O(1) space complexity, making it more memory efficient.
                        This method only works when array values are between 1 and n-1 (where n is array length).
                    </p>
                </div>
            </div>
        );
    };

    return (
        <CommonFuncUICard 
            name="Find Duplicate" 
            runAlgorithm={findDuplicate} 
            renderResult={renderFindDuplicateResult}
        />
    );
};

export default FindDuplicate;