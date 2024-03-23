// import React from 'react';

// const MealCard = ({ meal }) => {
//   const { strMeal, strMealThumb } = meal;

//   // Generate a random rating between 1 to 4
//   const randomRating = Math.floor(Math.random() * 4) + 1;

//   return (
//     <div className="border w-[14rem] md:w-64 m-5 md:m-10 p-3 shadow-lg rounded-md transition-transform hover:scale-105">
//       <div className="relative">
//         <img
//           className="w-full h-48 object-cover rounded-t-md"
//           src={strMealThumb}
//           alt={strMeal}
//         />
       
//       </div>
//       <div className="p-3">
//         <h2 className="text-lg font-bold mb-1">{strMeal}</h2>
//         <span className="text-sm font-medium">Rating: </span>
//         <span className="text-sm font-semibold bg-red-900 text-white px-2 py-1 rounded-md">{randomRating}⭐</span>
//         {/* <button className="block mt-2 bg-orange-500 text-white px-3 py-1 rounded-md hover:bg-orange-400 transition-colors">Add to Cart</button> */}
//       </div>
//     </div>
//   );
// }

// export default MealCard;


import React from 'react';

const MealCard = ({ meal, onMealClick }) => {
  const { strMeal, strMealThumb } = meal;

  // Generate a random rating between 1 to 4
  const randomRating = Math.floor(Math.random() * 4) + 1;

  return (
    <div className="border w-[14rem] md:w-64 m-5 md:m-10 p-3 shadow-lg rounded-md transition-transform hover:scale-105 cursor-pointer">
      <div className="relative" onClick={onMealClick}>
        <img
          className="w-full h-48 object-cover rounded-t-md"
          src={strMealThumb}
          alt={strMeal}
        />
      </div>
      <div className="p-3">
        <h2 className="text-lg font-bold mb-1">{strMeal}</h2>
        <span className="text-sm font-medium">Rating: </span>
        <span className="text-sm font-semibold bg-red-900 text-white px-2 py-1 rounded-md">{randomRating}⭐</span>
      </div>
    </div>
  );
}

export default MealCard;

