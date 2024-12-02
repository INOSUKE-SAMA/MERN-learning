import React, { useEffect, useState } from "react";
import axios from "axios";

const CategoryPage = ({ category }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((res) => {
        setItems(res.data.meals);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error in fetching data:", err);
        setError(true);
        setLoading(false);
      });
  }, [category]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error fetching data. Please try again later.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map(({ strMeal, strMealThumb, idMeal }) => (
            <div key={idMeal} className="p-4 border rounded shadow hover:shadow-lg transition">
              <h1 className="text-lg font-bold mb-2">{strMeal}</h1>
              <img src={strMealThumb} alt={strMeal} className="w-full h-auto rounded" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
