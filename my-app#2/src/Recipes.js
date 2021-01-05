import React from "react";
import style from "./Recipes.module.css";

function Recipe({ title, calories, image, ingredients }) {
  return (
    <div className={style.recipes}>
      <h1>{title}</h1>
      <p>{calories}</p>
      <img src={image} alt="" className="img" />
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredients.ingredient}>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
}
export default Recipe;
