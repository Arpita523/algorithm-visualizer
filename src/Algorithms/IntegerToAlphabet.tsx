import CommonFuncUICard from "../Components/General";

const IntegerToAlphabet = () => {
    // Implementation of Integer to Alphabet conversion algorithm
    const convertIntegerToAlphabet = (array: number[], n: number): { 
        convertedValues: { original: number, alphabet: string }[],
        originalArray: number[] 
    } => {
        const result = array.map(num => {
            // Handle values outside the range
            if (num <= 0) {
                return { original: num, alphabet: "Invalid (≤ 0)" };
            }
            
            let alphabet = "";
            let value = num;
            
            // Convert integer to Excel-like column title (A, B, ..., Z, AA, AB, ...)
            while (value > 0) {
                // Adjust for 1-based indexing (1 = A, 26 = Z)
                let remainder = (value - 1) % 26;
                alphabet = String.fromCharCode(65 + remainder) + alphabet;
                value = Math.floor((value - 1) / 26);
            }
            
            return { original: num, alphabet };
        });
        
        return {
            convertedValues: result,
            originalArray: [...array]
        };
    };

    // Render the result for Integer to Alphabet conversion
    const renderConversionResult = (result: { 
        convertedValues: { original: number, alphabet: string }[],
        originalArray: number[] 
    }, inputSize: number) => {
        return (
            <div>
                <div className="bg-green-100 p-4 rounded-lg mb-6">
                    <p className="text-green-800 font-semibold">
                        Integer to Alphabet conversion completed
                    </p>
                    <p className="text-gray-600 mt-2 text-sm">
                        The algorithm converts integers to alphabetic values (1→A, 2→B, ..., 26→Z, 27→AA, etc.)
                    </p>
                </div>

                <h3 className="text-lg font-semibold mb-2">Conversion Results</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="py-2 px-4 border-b border-gray-300 text-left">Original Number</th>
                                <th className="py-2 px-4 border-b border-gray-300 text-left">Alphabetic Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {result.convertedValues.map((item, index) => (
                                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                    <td className="py-2 px-4 border-b border-gray-300">{item.original}</td>
                                    <td className="py-2 px-4 border-b border-gray-300 font-bold text-blue-600">{item.alphabet}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                <h3 className="text-lg font-semibold mt-6 mb-2">Original Array</h3>
                <div className="overflow-x-auto whitespace-nowrap flex flex-wrap gap-2 p-2 rounded-lg">
                    {result.originalArray.map((num, index) => (
                        <div key={index} className="bg-blue-200 text-blue-700 font-bold py-2 px-4 rounded">{num.toString()}</div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <CommonFuncUICard 
            name="Integer to Alphabet" 
            runAlgorithm={convertIntegerToAlphabet} 
            renderResult={renderConversionResult}
        />
    );
};

export default IntegerToAlphabet;