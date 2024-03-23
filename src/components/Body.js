// import {useEffect, useState} from "react";
// import MealCard from "./MealCard";
// import Modal from "./Modal";

// const Body = ()=>{
//     const [mealList,setmealList] = useState([]);
//     const [selectedMeal, setSelectedMeal] = useState(null);

//     const fetchData = async()=>{
//         const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=indian");
//         const data = await response.json();
//         setmealList(data.meals);
//     }
//     useEffect(()=>{
//         fetchData();
//     },[]);

    
//     return (
//         <div>
//             <h1>Restuarnt with Online Food Delivery</h1>
//             <div className="flex flex-wrap justify-center items-center">
//                 {
//                     mealList && mealList.map((meal)=> 
//                     <div>
//                            <MealCard key = {meal.idMeal} meal = {meal}/> 
//                            <Modal meal = {meal}/>
//                         </div>
//                     )
                 
//                 }
//             </div>
//         </div>
//     )
// }

// export default Body;
import React, { useEffect, useState } from 'react';
import MealCard from './MealCard';
import Modal from './Modal';

const Body = () => {
  const [mealList, setMealList] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const fetchData = async () => {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=indian");
    const data = await response.json();
    setMealList(data.meals);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const openModal = (meal) => {
    setSelectedMeal(meal);
  }

  const closeModal = () => {
    setSelectedMeal(null);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center m-8">Restaurant with Online Food Delivery</h1>
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
