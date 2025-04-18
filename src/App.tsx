import { useState } from "react";
import HeadersPage from "./Components/Headers";
import SearchBar from "./Components/SearchBar";
import AlgorithmCard from "./Components/AlgoCard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FindDuplicate from "./Algorithms/findDuplicate";
import TowerOfHanoi from "./Algorithms/TowerofHanoi";
import algoListData from "./Components/AlgoCardList.json"
import TowerOfHanoiSource from "./AlgoSourcePage/towerOfHanoiSorce";
import BinarySearch from "./Algorithms/binarySearch";
import BinarySearchSource from "./AlgoSourcePage/binarySearchSource";
import FindDuplicateSource from "./AlgoSourcePage/FindDuplicateSource";
import MergeSort from "./Algorithms/MergeSort";
import MergeSortSource from "./AlgoSourcePage/MergeSortSource";
import QuickSort from "./Algorithms/QuickSort";
import QuickSortSource from "./AlgoSourcePage/QuickSortSource";
import IntegerToAlphabet from "./Algorithms/IntegerToAlphabet";
import IntegerToAlphabetSource from "./AlgoSourcePage/IntegerToAlphabetSource";

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
        <Route path="/tower-of-hanoi" element={<TowerOfHanoi />} /> 
        <Route path="/tower-of-hanoi-source" element={<TowerOfHanoiSource />} />
        <Route path="/binary-search" element={<BinarySearch />} /> 
        <Route path="/binary-search-source" element={<BinarySearchSource />} />
        <Route path="/find-duplicates" element={<FindDuplicate />} />
        <Route path="/find-duplicate-source" element={<FindDuplicateSource />} />
        <Route path="/merge-sort" element={<MergeSort />} />
        <Route path="/merge-sort-source" element={<MergeSortSource />} />
        <Route path="/quick-sort" element={<QuickSort />} />
        <Route path="/quick-sort-source" element={<QuickSortSource />} />
        <Route path="integer-to-alphabet" element={<IntegerToAlphabet />} />
        <Route path="/integer-to-alphabet-source" element={<IntegerToAlphabetSource />} />

      </Routes>
    </Router>
  );
}

export default App
