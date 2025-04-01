import { useState } from "react";
import HeadersPage from "./Components/Headers";
import SearchBar from "./Components/SearchBar";
import AlgorithmCard from "./Components/AlgoCard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FindDuplicate from "./Algorithms/findDuplicate";
import BubbleSort from "./Algorithms/BubbleSort"; // Import Bubble Sort Page
import TowerOfHanoi from "./Algorithms/TowerofHanoi";
import algoListData from "./Components/AlgoCardList.json"
import TowerOfHanoiSource from "./AlgoSourcePage/towerOfHanoiSorce";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQuery = (query: string) => {
    setSearchQuery(query);
    console.log("Searching for:", query);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="-mt-28 relative isolate overflow-hidden bg-gray-900 min-h-screen flex flex-col justify-between py-16 sm:py-24 lg:py-32">
              <HeadersPage
                title="Algorithm Visualizer"
                description="Algorithm Visualizer is an interactive tool to explore, visualize, and understand various algorithms with dynamic animations..."
              />
              <SearchBar searchQuery={searchQuery} setSearchQuery={handleSearchQuery} />
              <AlgorithmCard algorithms={algoListData}/>
            </div>
          }
        />
        <Route path="/find-duplicates" element={<FindDuplicate />} />
        <Route path="/bubble-sort" element={<BubbleSort />} /> 
        <Route path="/tower-of-hanoi" element={<TowerOfHanoi />} /> 
        <Route path="/tower-of-hanoi-source" element={<TowerOfHanoiSource />} />

      </Routes>
    </Router>
  );
}

export default App
