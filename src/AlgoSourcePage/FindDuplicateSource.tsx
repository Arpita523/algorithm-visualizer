import { useNavigate } from "react-router-dom";

const FindDuplicateSource = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/find-duplicates');
    };

    return (
        <div className="min-h-screen bg-gray-900 p-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold font-serif">Find Duplicate Source</h2>
                    <button onClick={handleBack}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded flex items-center">
                            <span className="mr-2">←</span>
                            <span>Hide Source</span>
                    </button>
                </div>

                <div className="mb-8 bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Key Learnings</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Multiple approaches to find duplicates in an array</li>
                        <li>HashSet approach for general cases (O(n) time, O(n) space)</li>
                        <li>Floyd's Cycle Detection Algorithm (Tortoise and Hare method) for specific cases (O(n) time, O(1) space)</li>
                        <li>Understanding trade-offs between different algorithms for the same problem</li>
                        <li>Treating arrays as implicit linked lists for cycle detection</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Problem Statement</h3>
                    <p className="mb-4">
                        Given an array of integers, find a duplicate element. There may be multiple duplicates, but we only need to find one of them.
                    </p>
                    <p>
                        Special case: If the array contains n+1 integers with values between 1 and n, then there must be at least one duplicate.
                        In this special case, we can use Floyd's Cycle Detection Algorithm.
                    </p>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Approach 1: Using a HashSet</h3>
                    <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                        <pre className="whitespace-pre-wrap">
{`function findDuplicateWithSet(arr) {
  const seen = new Set();
  
  for (let num of arr) {
    // If we've seen this number before, it's a duplicate
    if (seen.has(num)) {
      return num;
    }
    // Otherwise, add it to our set of seen numbers
    seen.add(num);
  }
  
  return null; // No duplicate found
}

// Time Complexity: O(n)
// Space Complexity: O(n)`}
                        </pre>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Approach 2: Floyd's Cycle Detection (Tortoise and Hare)</h3>
                    <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                        <pre className="whitespace-pre-wrap">
{`function findDuplicateWithFloyd(arr) {
  // This only works if array values are between 1 and n
  // where n is array length-1, ensuring at least one duplicate
  
  // Phase 1: Find meeting point
  let tortoise = arr[0];
  let hare = arr[0];
  
  do {
    tortoise = arr[tortoise]; // Move one step
    hare = arr[arr[hare]];    // Move two steps
  } while (tortoise !== hare);
  
  // Phase 2: Find the entrance to the cycle
  tortoise = arr[0];
  while (tortoise !== hare) {
    tortoise = arr[tortoise];
    hare = arr[hare];
  }
  
  return hare; // The duplicate number
}

// Time Complexity: O(n)
// Space Complexity: O(1)

/*
How it works:
1. We treat array values as pointers to indices
2. If there's a duplicate value, it creates a cycle
3. The tortoise and hare will eventually meet inside the cycle
4. Once they meet, reset tortoise to start and move both at same speed
5. They will meet again at the entrance of the cycle (the duplicate)
*/`}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindDuplicateSource;