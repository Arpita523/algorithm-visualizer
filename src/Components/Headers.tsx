
interface HeadersPageProps {
  title : string
  description : string
}

const HeadersPage:React.FC<HeadersPageProps> = ({ title, description })=> {
    return (
    // <div className="relative isolate overflow-hidden bg-gray-900 min-h-screen flex flex-col justify-between py-16 sm:py-24 lg:py-0.5">
    <div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center pt-16">
        <div className=" max-w-2xl mx-auto">
          <a href="#" className="inline-block ml-2">
            <img
            alt=""
            src="src/Files/AlgoVisualizer.png"
            className="h-20 w-auto"
            />
          </a>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white font-serif">
              {title}
            </h2>
            <p className="mt-4 text-lg text-gray-300 italic">{description}</p>

            {/* <SearchBar/> */}
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-1155/678 w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>
       </div>
      
    );
  };
  
export default HeadersPage;
  
  

