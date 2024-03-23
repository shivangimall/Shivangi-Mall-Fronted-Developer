import React, { useEffect, useState } from 'react';
import { MEAL_API_ID } from '../utils/constants';

const Modal = ({ meal, onClose }) => {
  const [mealDetails, setMealDetails] = useState(null);

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const response = await fetch(`${MEAL_API_ID}${meal.idMeal}`);
        const data = await response.json();
        setMealDetails(data.meals[0]);
      } catch (error) {
        console.error('Error fetching meal details:', error);
      }
    };

    fetchMealDetails();
  }, [meal]);

  if (!mealDetails) {
    return null; // You can render a loading indicator here
  }

  const { strMeal, strMealThumb, strCategory, strArea, strInstructions } = mealDetails;

  const steps = strInstructions.split('\r\n').filter(step => step.trim() !== '');

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-50 overflow-y-auto">
      <div className="bg-white p-6 rounded-md max-w-md relative overflow-y-auto">
        <button className="absolute top-2 right-2 text-gray-600 z-10" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
          <img src={strMealThumb} alt={strMeal} className="w-64 h-60 object-cover rounded-md mb-4 mx-auto" />
          <h2 className="text-2xl font-bold mb-2 text-center">{strMeal}</h2>
          <p><strong>Category:</strong> {strCategory}</p>
          <p><strong>Area:</strong> {strArea}</p>
          <p className="mb-4"><strong>Instructions:</strong></p>
          <ol className="list-decimal pl-4">
            {steps.map((step, index) => (
              <li key={index} className="mb-2">{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Modal;


