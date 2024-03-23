import React, { useEffect, useState } from 'react';
import MealCard from './MealCard';
import Modal from './Modal';
import AreaFilter from './AreaFilter';

const Body = () => {
  const [mealList, setMealList] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [showAreaDropdown, setShowAreaDropdown] = useState(false);
  const [areas, setAreas] = useState([]);
  const [selectedAreas, setSelectedAreas] = useState(['indian']); // Initialize with 'indian'

  const fetchData = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedAreas.join(',')}`);
    const data = await response.json();
    setMealList(data.meals);
  }

  const fetchAreas = async () => {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
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

  return (
    <div>
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center m-8">Restaurant with Online Food Delivery</h1>
      <div className="flex justify-center">
        <button onClick={toggleAreaDropdown} className="bg-gray-400 font-bold p-2 rounded-md">Filter By Area</button>
        {showAreaDropdown && (
          <AreaFilter areas={areas} onClose={toggleAreaDropdown} onApply={handleAreaSelection} />
        )}
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {mealList && mealList.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} onMealClick={() => openModal(meal)} />
        ))}
      </div>
      {selectedMeal && <Modal meal={selectedMeal} onClose={closeModal} />}
    </div>
  );
}

export default Body;


