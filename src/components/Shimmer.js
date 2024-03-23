const Shimmer = () =>{
    return (
        <>
       
          <div className="flex flex-wrap my-1 rounded-md justify-center">
            {Array(3)
              .fill("")
              .map((e, index) => (
                <div key={index} className="border  w-72 m-10 min-h-[330px] shadow-xl rounded-md">
                  <h1 className="border w-72 h-44 bg-gray-200 rounded-tl-md rounded-tr-md" ></h1>
                  <h1 className=" w-48 h-8 ml-3 rounded-md bg-gray-200 my-3"></h1>
                  <h1 className=" w-64 h-8 ml-4 rounded-md bg-gray-200 my-3"></h1>
                  <h1 className=" w-28 h-6 ml-4 rounded-md bg-gray-200 my-3"></h1>
                </div>
              ))}
          </div>
        </>
      );
}

export default Shimmer;