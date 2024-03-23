const Header = () => {
    return (
     
        <div className="flex p-3 justify-between shadow-lg">
      
            <img id="logo" className="w-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwv_26sHHw8EHJ1XzvVgopGzRSzAhUih1np-boi3T3UI9UrnIoXpdzXWwn8w&s" alt="logo" />
            <div className="pt-2">
            <input type = "text" className="w-60 md:w-80 p-2 bg-gray-300 rounded-md outline-none" placeholder="Search for Resturant and Food"/>
            </div>
            
          
        </div>
     
    );
  }
  
  export default Header;
  