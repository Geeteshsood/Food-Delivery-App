import React, { useState,useEffect } from 'react';
import MealItem from './MealItem';

export default function Meals() {

  const [loadedMeals , setLoadedMeals] = useState([]);

  useEffect(() => {

    async function fetchMeals() {

        const response = await fetch('https://raw.githubusercontent.com/Geeteshsood/jsonhost/main/index.json');

        const data =  await response.json();

        setLoadedMeals(data);
    }

    fetchMeals();

  }, []);

  return (
    <ul id = 'meals'>
        {loadedMeals.map((meal)=>(
            <MealItem item = {meal}/>
        ))}
    </ul>
  );
}
