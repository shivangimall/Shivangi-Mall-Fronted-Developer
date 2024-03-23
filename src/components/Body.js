// import React, { useEffect, useState } from 'react';
// import MealCard from './MealCard';
// import Modal from './Modal';
// import AreaFilter from './AreaFilter';
// import { AREA_API,MEAL_API } from '../utils/constants';

// const Body = () => {
//   const [mealList, setMealList] = useState([]);
//   const [selectedMeal, setSelectedMeal] = useState(null);
//   const [showAreaDropdown, setShowAreaDropdown] = useState(false);
//   const [areas, setAreas] = useState([]);
//   const [selectedAreas, setSelectedAreas] = useState(['indian']); // Initialize with 'indian'

//   const fetchData = async () => {
//     const response = await fetch(`${MEAL_API}${selectedAreas.join(',')}`);
//     const data = await response.json();
//     setMealList(data.meals);
//   }

//   const fetchAreas = async () => {
//     const response = await fetch(`${AREA_API}`);
//     const data = await response.json();
//     setAreas(data.meals.map(area => area.strArea));
//   }

//   useEffect(() => {
//     fetchData();
//     fetchAreas();
//   }, [selectedAreas]);

//   const openModal = (meal) => {
//     setSelectedMeal(meal);
//   }

//   const closeModal = () => {
//     setSelectedMeal(null);
//   }

//   const toggleAreaDropdown = () => {
//     setShowAreaDropdown(!showAreaDropdown);
//   }

//   const handleAreaSelection = (selectedAreas) => {
//     setSelectedAreas(selectedAreas);
//   }

//   return (
//     <div>
//       <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center m-8">Restaurant with Online Food Delivery</h1>
//       <div className="flex justify-center">
//         <button onClick={toggleAreaDropdown} className="bg-gray-400 font-bold p-2 rounded-md">Filter By Area</button>
//         {showAreaDropdown && (
//           <AreaFilter areas={areas} onClose={toggleAreaDropdown} onApply={handleAreaSelection} />
//         )}
//       </div>
//       <div className="flex flex-wrap justify-center items-center">
//         {mealList && mealList.map((meal) => (
//           <MealCard key={meal.idMeal} meal={meal} onMealClick={() => openModal(meal)} />
//         ))}
//       </div>
//       {selectedMeal && <Modal meal={selectedMeal} onClose={closeModal} />}
//     </div>
//   );
// }

// export default Body;


import React, { useEffect, useState } from 'react';
import MealCard from './MealCard';
import Modal from './Modal';
import AreaFilter from './AreaFilter';
import { AREA_API, MEAL_API } from '../utils/constants';

const Body = () => {
  const [mealList, setMealList] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [showAreaDropdown, setShowAreaDropdown] = useState(false);
  const [areas, setAreas] = useState([]);
  const [selectedAreas, setSelectedAreas] = useState(['indian']); // Initialize with 'indian'
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const fetchData = async () => {
    const response = await fetch(`${MEAL_API}${selectedAreas.join(',')}`);
    const data = await response.json();
    setMealList(data.meals);
  }

  const fetchAreas = async () => {
    const response = await fetch(`${AREA_API}`);
    const data = await response.json();
    setAreas(data.meals.map(area => area.strArea));
  }

  useEffect(() => {
    fetchData();
    fetchAreas();
  }, [selectedAreas]);

  const openModal = (meal) => {
    setSelectedMeal(meal);
  }

  const closeModal = () => {
    setSelectedMeal(null);
  }

  const toggleAreaDropdown = () => {
    setShowAreaDropdown(!showAreaDropdown);
  }

  const handleAreaSelection = (selectedAreas) => {
    setSelectedAreas(selectedAreas);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPaginationControls = () => {
    const totalPages = Math.ceil(mealList.length / itemsPerPage);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-1 mx-1 rounded-md ${currentPage === i ? 'bg-gray-600 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-gray-400`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mealList.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="p-4">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8">Restaurant with Online Food Delivery</h1>
      <div className="flex justify-center mb-4">
        <button
          onClick={toggleAreaDropdown}
          className="bg-gray-400 font-bold p-2 rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
        >
          Filter By Area
        </button>
        {showAreaDropdown && (
          <AreaFilter areas={areas} onClose={toggleAreaDropdown} onApply={handleAreaSelection} />
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentItems.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} onMealClick={() => openModal(meal)} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {renderPaginationControls()}
      </div>
      {selectedMeal && <Modal meal={selectedMeal} onClose={closeModal} />}
    </div>
  );
}

export default Body;



