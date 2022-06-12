import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";

function ShowCustomRecipe(props) {
  console.log(props);
  const navigate = useNavigate();
  const { id } = useParams();
  const recipes = props.recipe;
  console.log(`the recipes are: ${recipes}`);
  const recipe = recipes.find((p) => p._id === id);
  console.log(`The recipe is: ${recipe}`);

  const [editForm, setEditForm] = useState(recipe);

  // handleChange function for form
  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

  // handlesubmit for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateRecipe(editForm, id);
    // redirect people back to index
    navigate("/recipe");
  };

  const removeRecipe = () => {
    props.deleteRecipe(id);
    navigate("/recipe");
  };

  return (
    <div className="body-page">
      <h2 class="waviy">
        <span> I</span>
        <span>n</span>
        <span>f</span>
        <span>o </span>
        <span>P</span>
        <span>a</span>
        <span>g</span>
        <span>e</span>
      </h2>
      <div className="customRecipe">
        <h2>Title: {recipe.title}</h2>
        <h2>Diet Label: {recipe.diet_label}</h2>
        <h2>Image: {recipe.image}</h2>
        <h2>Ingredients: {recipe.ingredients}</h2>
      </div>
      <button id="delete" onClick={removeRecipe} className="buttonDelete">
        DELETE CUSTOM RECIPE
      </button>
      <form onSubmit={handleSubmit}>
        <div className="createTable">
          <input
            type="text"
            value={editForm.title}
            name="title"
            placeholder="title"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.diet_label}
            name="diet_label"
            placeholder="diet_label"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.image}
            name="image"
            placeholder="image"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.ingredients}
            name="ingredients"
            placeholder="ingredients"
            onChange={handleChange}
          />
          <input id="update-recipe" type="submit" value="Update Custom Recipe" />
        </div>
      </form>
    </div>
  );
}

export default ShowCustomRecipe;