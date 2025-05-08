import { useNavigate } from "react-router-dom"

const DijkstraAlgorithmSource = () => {
    const navigate = useNavigate()

    const handleBack = () => {
        navigate('/dijkstra-algorithm')
    }
    return(
        <div className="min-h-screen bg-gray-900 p-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold font-serif">Dijkstra Algorithm</h2>
                    <button onClick={handleBack}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded flex items-center">
                            <span className="mr-2">←</span>
                            <span>Hide Source</span>
                    </button>
                </div>
                <div className="mb-8 bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Key Learnings</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Greedy algorithm approach</li>
                        <li>Shortest path finding in weighted graphs</li>
                        <li>Priority queue optimization</li>
                        <li>Time complexity: O(V²) without priority queue, O((V+E)logV) with priority queue</li>
                    </ul>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Problem Statement</h3>
                    <p>
                        Dijkstra's algorithm finds the shortest path from a source node to all other nodes in a weighted graph.
                        The algorithm works on graphs with non-negative edge weights and efficiently determines:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                         <li>The shortest distance from source to each node</li>
                         <li>The optimal path to reach each node from the source</li>
                         <li>Guarantees optimality for graphs with non-negative weights</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Implementation</h3>
                    <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                        <pre className="whitespace-pre-wrap">
                            {`function dijkstra(graph, source) {
  const n = graph.length;
  const distances = new Array(n).fill(Infinity);
  const visited = new Array(n).fill(false);
  const previous = new Array(n).fill(null);
  
  // Distance from source to itself is 0
  distances[source] = 0;
  
  for (let i = 0; i < n; i++) {
    // Find vertex with minimum distance
    let minDistance = Infinity;
    let minIndex = -1;
    
    for (let v = 0; v < n; v++) {
      if (!visited[v] && distances[v] < minDistance) {
        minDistance = distances[v];
        minIndex = v;
      }
    }
    
    // If we couldn't find a valid next node
    if (minIndex === -1) break;
    
    // Mark the picked vertex as visited
    visited[minIndex] = true;
    
    // Update distances of adjacent vertices
    for (let j = 0; j < n; j++) {
      // Check all nodes that have an edge from minIndex
      if (graph[minIndex][j] > 0) {
        const newDist = distances[minIndex] + graph[minIndex][j];
        
        if (newDist < distances[j]) {
          distances[j] = newDist;
          previous[j] = minIndex;
        }
      }
    }
  }
  
  return { distances, previous };
}

// Function to reconstruct the path from source to target
function getPath(previous, target) {
  const path = [];
  let current = target;
  
  while (current !== null) {
    path.unshift(current);
    current = previous[current];
  }
  
  return path;
}`}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DijkstraAlgorithmSource