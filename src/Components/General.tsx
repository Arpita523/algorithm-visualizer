import { useState, useEffect } from "react";
import RandomArrayGenerator from "./RandomArray";
import { useNavigate } from "react-router-dom";

interface ComponentsGeneralProps {
  name: string;
  runAlgorithm: (array: number[], n: number) => any;
  renderResult: (result: any, inputSize: number) => React.ReactNode;
}

const CommonFuncUICard = ({ name, runAlgorithm, renderResult }: ComponentsGeneralProps) => {
    const [arrayLength, setArrayLength] = useState(10);
    const [array, setArray] = useState<number[]>([]);
    const [algorithmResult, setAlgorithmResult] = useState<any>(null);
    const [isResultVisible, setIsResultVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setArray(RandomArrayGenerator(arrayLength));
        // Reset the result when array changes
        setIsResultVisible(false);
    }, [arrayLength]);

    const handleGenerateNewArray = () => {
        setArray(RandomArrayGenerator(arrayLength));
        setIsResultVisible(false);
    };

    const handleIncreaseLength = () => {
        setArrayLength(prev => prev + 1);
    };

    const handleDecreaseLength = () => {
        if (arrayLength > 1) {
            setArrayLength(prev => prev - 1);
        }
    };

    const handleViewSource = () => {
        const routeName = name.toLowerCase().replace(/\s+/g, '-');
        navigate(`/${routeName}-source`);
    };
    
    const handleBackToAlgorithm = () => {
        navigate('/');
    };

    const handleRunAlgorithm = () => {
        const result = runAlgorithm(array, arrayLength);
        setAlgorithmResult(result);
        setIsResultVisible(true);
    };

    return (
        <div className="min-h-screen bg-gray-900 flex justify-center items-center p-6">
            <div className="bg-white mb-20 p-6 rounded-2xl shadow-lg w-full max-w-4xl">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
                        <button 
                            onClick={handleBackToAlgorithm} 
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded flex items-center mr-4"
                        >
                            <span className="mr-1">&#8592;</span>
                            <span>Back</span>
                        </button>
                        <h2 className="text-3xl font-bold font-serif">{name}</h2>
                    </div>
                    <button 
                        onClick={handleViewSource} 
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded flex items-center"
                    >
                        <span className="mr-2">&lt;/&gt;</span>
                        <span>View Source</span>
                    </button>
                </div>
                <div className="mb-4 flex items-center space-x-2">
                    <button onClick={handleDecreaseLength} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">-</button>
                    <span className="text-lg font-semibold">Array Length: {arrayLength}</span>
                    <button onClick={handleIncreaseLength} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">+</button>
                    <button onClick={handleGenerateNewArray} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded flex items-center">
                        &#x21bb; Generate New Array
                    </button>
                </div>
                <h3 className="text-lg font-semibold mb-2 mt-4 ">Input Array</h3>
                <div className="overflow-x-auto whitespace-nowrap flex flex-wrap gap-2 p-2 rounded-lg">
                    {array.map((num, index) => (
                        <div key={index} className="bg-blue-200 text-blue-700 font-bold py-2 px-4 rounded">{num.toString()}</div>
                    ))}
                </div>
                
                {isResultVisible && algorithmResult !== null && (
                    <div className="mt-6">
                        {renderResult(algorithmResult, arrayLength)}
                    </div>
                )}
                
                <div className="mt-6 flex justify-center">
                    <button 
                        onClick={handleRunAlgorithm}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded flex items-center text-lg"
                    >
                        &#9654; Run Algorithm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CommonFuncUICard;

