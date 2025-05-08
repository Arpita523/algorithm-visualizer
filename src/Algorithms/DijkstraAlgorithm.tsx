import CommonFuncUICard from "../Components/General";

const DijkstraAlgorithm = () => {
    // Implementation of Dijkstra's Algorithm
    const runDijkstra = (array: number[], n: number): { distances: number[], path: number[] } => {
        // Create a graph from the input array
        // For visualization purposes, we'll use the array to represent edge weights
        // where array[i] is the weight of edge from node i to i+1
        
        // Initialize distances array (all set to infinity except source)
        const distances = new Array(n).fill(Number.MAX_SAFE_INTEGER);
        distances[0] = 0; // Source node is 0
        
        // Initialize visited array
        const visited = new Array(n).fill(false);
        
        // Track path
        const path: number[] = [];
        
        // Dijkstra's algorithm
        for (let i = 0; i < n; i++) {
            // Find vertex with minimum distance
            let minDistance = Number.MAX_SAFE_INTEGER;
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
            path.push(minIndex);
            
            // Update distances of adjacent vertices
            for (let j = 0; j < n; j++) {
                // Only consider unvisited nodes
                if (!visited[j]) {
                    // Edge exists if we're looking at adjacent nodes
                    const isAdjacent = Math.abs(j - minIndex) === 1;
                    
                    if (isAdjacent) {
                        // Use array value as edge weight
                        const edgeWeight = array[Math.min(j, minIndex)];
                        
                        // Update distance if shorter path found
                        if (distances[minIndex] + edgeWeight < distances[j]) {
                            distances[j] = distances[minIndex] + edgeWeight;
                        }
                    }
                }
            }
        }
        
        return { distances, path };
    };

    // Render the result for Dijkstra's Algorithm
    const renderDijkstraResult = (result: { distances: number[], path: number[] }, nodes: number) => {
        return (
            <div>
                <div className="bg-green-100 p-4 rounded-lg mb-6">
                    <p className="text-green-800 font-semibold">
                        Shortest path distances from source node (0) to all nodes:
                    </p>
                    <div className="mt-2 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
                        {result.distances.map((distance, index) => (
                            <div key={index} className="flex items-center">
                                <span className="font-medium mr-2">Node {index}:</span>
                                <span className={distance === Number.MAX_SAFE_INTEGER ? "text-red-500" : "text-green-700 font-bold"}>
                                    {distance === Number.MAX_SAFE_INTEGER ? "∞" : distance}
                                </span>
                            </div>
                        ))}
                    </div>
                    <p className="text-gray-600 mt-4 text-sm">
                        Dijkstra's algorithm computes the shortest path from a source node to all other nodes in a graph.
                    </p>
                </div>

                <h3 className="text-lg font-semibold mb-2">Visited Path Order</h3>
                <div className="overflow-x-auto whitespace-nowrap flex flex-wrap gap-2 p-2 rounded-lg">
                    {result.path.map((node, index) => (
                        <div key={index} className="bg-green-200 text-green-700 font-bold py-2 px-4 rounded">Node {node}</div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <CommonFuncUICard 
            name="Dijkstra Algorithm" 
            runAlgorithm={runDijkstra} 
            renderResult={renderDijkstraResult}
        />
    );
};

export default DijkstraAlgorithm;