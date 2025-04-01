import {useNavigate } from "react-router-dom"

const TowerOfHanoiSource = () => {
    const navigate = useNavigate()

    const handleBack = () => {
        navigate('/tower-of-hanoi')
    }
    return(
        <div className="min-h-screen bg-gray-900 p-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold font-serif">Tower Of Hanoi</h2>
                    <button onClick={handleBack}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded flex items-center">
                            <span className="mr-2">←</span>
                            <span>Hide Source</span>
                    </button>
                </div>
                <div className="mb-8 bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Key Learnings</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Recursive problem-solving approach</li>
                        <li>Base case identification</li>
                        <li>Exponential time complexity understanding</li>
                        <li>Problem breakdown into subproblems</li>
                    </ul>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Problem Statement</h3>
                    <p> The Tower of Hanoi is a classic problem where we have three rods and n disks. 
                        The objective is to move the entire stack of disks from the source rod to the destination rod, 
                        following these rules:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                         <li>Only one disk can be moved at a time.</li>
                         <li>No disk may be placed on top of a smaller disk.</li>
                         <li>Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Implementation</h3>
                    <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                        <pre className="whitespace-pre-wrap">
                            { `function towerHanoi(discs) { return Math.pow(2, discs) - 1 }` }
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TowerOfHanoiSource



// import { useNavigate } from "react-router-dom";

// const TowerOfHanoiSource = () => {
//     const navigate = useNavigate();

//     const handleBack = () => {
//         navigate('/tower-of-hanoi');
//     };

//     return (
//         <div className="min-h-screen bg-gray-900 p-6">
//             <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl mx-auto">
//                 <div className="flex justify-between items-center mb-6">
//                     <h2 className="text-3xl font-bold font-serif">Tower Of Hanoi</h2>
//                     <button 
//                         onClick={handleBack}
//                         className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded flex items-center"
//                     >
//                         <span className="mr-2">←</span>
//                         <span>Hide Source</span>
//                     </button>
//                 </div>

//                 <div className="mb-8 bg-gray-100 p-4 rounded-lg">
//                     <h3 className="text-xl font-semibold mb-4">Key Learnings</h3>
//                     <ul className="list-disc pl-6 space-y-2">
//                         <li>Recursive algorithm used to solve the classic Tower of Hanoi puzzle</li>
//                         <li>Demonstrates divide and conquer approach</li>
//                         <li>Time complexity: O(2^n) where n is the number of disks</li>
//                         <li>Space complexity: O(n) due to recursive call stack</li>
//                     </ul>
//                 </div>

//                 <div className="mb-8">
//                     <h3 className="text-xl font-semibold mb-4">Problem Statement</h3>
//                     <p>
//                         The Tower of Hanoi is a classic problem where we have three rods and n disks. 
//                         The objective is to move the entire stack of disks from the source rod to the destination rod, 
//                         following these rules:
//                     </p>
//                     <ul className="list-disc pl-6 mt-2 space-y-1">
//                         <li>Only one disk can be moved at a time.</li>
//                         <li>Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack.</li>
//                         <li>No disk may be placed on top of a smaller disk.</li>
//                     </ul>
//                 </div>

//                 <div>
//                     <h3 className="text-xl font-semibold mb-4">Implementation</h3>
//                     <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
//                         <pre className="whitespace-pre-wrap">
// {`function towerOfHanoi(n, source, auxiliary, destination, steps = []) {
//     if (n === 1) {
//         // Move disk 1 from source to destination
//         steps.push({ 
//             disk: 1, 
//             from: source, 
//             to: destination 
//         });
//         return steps;
//     }
    
//     // Move n-1 disks from source to auxiliary using destination as temporary
//     towerOfHanoi(n - 1, source, destination, auxiliary, steps);
    
//     // Move the nth disk from source to destination
//     steps.push({ 
//         disk: n, 
//         from: source, 
//         to: destination 
//     });
    
//     // Move n-1 disks from auxiliary to destination using source as temporary
//     towerOfHanoi(n - 1, auxiliary, source, destination, steps);
    
//     return steps;
// }

// // Function to run the Tower of Hanoi algorithm
// function runTowerOfHanoi(numDisks) {
//     const sourcePeg = 'A';
//     const auxiliaryPeg = 'B';
//     const destinationPeg = 'C';
    
//     const steps = towerOfHanoi(numDisks, sourcePeg, auxiliaryPeg, destinationPeg);
    
//     return {
//         totalSteps: steps.length,
//         steps: steps
//     };
// }

// // Example usage
// // const result = runTowerOfHanoi(3);
// // console.log(\`Total steps: \${result.totalSteps}\`);
// // console.log(result.steps);`}
//                         </pre>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TowerOfHanoiSource;