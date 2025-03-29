const TowerOfHanoi = () => {
    return(
        <div className="min-h-screen bg-gray-900 flex justify-center items-center p-4 ">
            <div className="bg-white mb-60 h-96 p-6 rounded-2xl shadow-lg w-full max-w-4xl ">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold mb-4  font-serif">Tower Of Hanoi</h2>
                <button className=" bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ">
                    <img src="src/Files/source.png" alt="Source Icon" className="w-4 h-4 mr-2"/>
                    <span> View Source</span>
                </button>
                </div>
            </div>
            <div className="mt-5">
                <h3 className="text-3xl font-bold mb-4 font-serif">Array Length</h3>
            </div>
        </div>  
 )
}
export default TowerOfHanoi