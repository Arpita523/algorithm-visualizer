import CommonFuncUICard from "../Components/General";

const TowerOfHanoi = () => {
    // Implementation of Tower of Hanoi algorithm
    const runTowerOfHanoi = (array: number[], n: number): { moves: number, outputArray: number[] } => {
        // Formula to calculate minimum moves: 2^n - 1
        const moves = Math.pow(2, n) - 1;
        
        // For Tower of Hanoi visualization, we'll just return the same array in the output
        return { 
            moves, 
            outputArray: [...array] 
        };
    };

    // Render the result for Tower of Hanoi
    const renderTowerOfHanoiResult = (result: { moves: number, outputArray: number[] }, discs: number) => {
        return (
            <div>
                <div className="bg-green-100 p-4 rounded-lg mb-6">
                    <p className="text-green-800 font-semibold">
                        Minimum number of moves required to solve Tower of Hanoi with {discs} discs: 
                        <span className="text-xl font-bold ml-2">{result.moves}</span>
                    </p>
                    <p className="text-gray-600 mt-2 text-sm">
                        The Tower of Hanoi with {discs} discs requires exactly {result.moves} moves to solve optimally.
                    </p>
                </div>

                <h3 className="text-lg font-semibold mb-2">Output Array</h3>
                <div className="overflow-x-auto whitespace-nowrap flex flex-wrap gap-2 p-2 rounded-lg">
                    {result.outputArray.map((num, index) => (
                        <div key={index} className="bg-green-200 text-green-700 font-bold py-2 px-4 rounded">{num.toString()}</div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <CommonFuncUICard 
            name="Tower Of Hanoi" 
            runAlgorithm={runTowerOfHanoi} 
            renderResult={renderTowerOfHanoiResult}
        />
    );
};

export default TowerOfHanoi;

// import CommonFuncUICard from "../Components/General";

// const TowerOfHanoi = () => {
//     return (
//         <div>
//             <CommonFuncUICard name="Tower Of Hanoi" />
//         </div>
//     );
// };

// export default TowerOfHanoi;

