import React, { useState } from "react";

const todaysMeals = [
  { id: 1, name: 'Baked Beans', ticked: false },
  { id: 2, name: 'Baked Sweet Potatoes', ticked: false },
  { id: 3, name: 'Baked Potatoes', ticked: false },
];

export const MealsContext = React.createContext();

const MealsProvider = ({ children }) => {
  const [meals, setMeals] = useState(todaysMeals);

  const tickMeal = (mealId) => {
    setMeals((prevMeals) =>
      prevMeals.map((meal) =>
        meal.id === mealId ? { ...meal, ticked: !meal.ticked } : meal
      )
    );
  };

  return (
    <MealsContext.Provider value={{ meals, tickMeal }}>
      {children}
    </MealsContext.Provider>
  );
};

export default MealsProvider;
