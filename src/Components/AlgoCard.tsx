import { useNavigate } from "react-router-dom";
import algoListData from "./AlgoCardList.json"

interface Algorithm {
  category: string;
  title: string;
  description: string;
  tags: string[];
  timeComplexity: string;
  spaceComplexity: string;
}

const categoryColors: { [key: string]: string } = {
  Sorting: "bg-blue-100 text-blue-800",
  Searching: "bg-green-100 text-green-800",
  dynamic: "bg-pink-100 text-pink-800",
  Recursion: "bg-orange-100 text-blue-800",
  Conversion:"bg-purple-100 text-purple-800",
};

const AlgorithmCard: React.FC<{ algorithms?: Algorithm[] }> = ({
  algorithms = algoListData,
}) => {
    const navigate = useNavigate();
    const handleNavigate = (title : string) => {
        const slug  = title.toLowerCase().replace(/ /g, "-");
        navigate(`/${slug}`)
    }
    
   
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12 top-[-350px]">
      <div className="mx-auto max-w-screen-xl px-4 w-full">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {algorithms.map((algo, index) => (
            <div key={index}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transform hover:translate-y-2 transition-all duration-300 p-4"
                onClick={() => handleNavigate(algo.title)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">{algo.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${categoryColors[algo.category]}`}>
                      {algo.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{algo.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {algo.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full mb-5">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 text-sm"> → </button>
                  </div>
                  <div className="mt-4 flex justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <span className="text-gray-500">⏱️</span>
                      <span className="font-medium">{algo.timeComplexity}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="text-gray-500">💾</span>
                      <span className="font-medium">{algo.spaceComplexity}</span>
                    </div>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlgorithmCard;
