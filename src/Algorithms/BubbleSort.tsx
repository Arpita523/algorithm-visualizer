const BubbleSort = () => {
    return (
      <div className="p-10">
        <h2 className="text-2xl font-bold">Bubble Sort Algorithm</h2>
        <pre className="bg-gray-800 text-white p-5 rounded mt-4">
          {`
          function bubbleSort(arr) {
            let len = arr.length;
            for (let i = 0; i < len; i++) {
              for (let j = 0; j < len - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                  let temp = arr[j];
                  arr[j] = arr[j + 1];
                  arr[j + 1] = temp;
                }
              }
            }
            return arr;
          }
          `}
        </pre>
      </div>
    );
  };
  
  export default BubbleSort;
  