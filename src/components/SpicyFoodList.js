import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");

  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  });

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    console.log(newFood);
    setFoods(prevVal => [...prevVal, newFood])

  }
  function handleClick(id) {
    setFoods(prevVal => {
      // prevVal.filter(food => food.id !== id)
      let newArr = prevVal.map(food => {
        if (food.id === id) {
          return { ...food, heatLevel: food.heatLevel + 1 }
        }
        else {
          return food;
        }
      });
      return newArr;
    })
  }
  function handleLiClick(id) {
    const newFoodArray = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        };
      } else {
        return food;
      }
    });
    setFoods(newFoodArray);
  }
  [1, 2, 3].filter((number) => number !== 3);
  [1, 2, 3].map((number) => {
    if (number === 3) {
      // if the number is the one we're looking for, increment it
      return number + 100;
    } else {
      // otherwise, return the original number
      return number;
    }
  });

  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));


  return (
    <div>
      <select name="filter">
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;