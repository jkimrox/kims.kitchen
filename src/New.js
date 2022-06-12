import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomRecipes from './CustomRecipes';
import ShowCustomRecipe from './ShowCustomRecipe';


const herokuURL = "https://kim-kitchen.herokuapp.com/"

function getRecipes() {
    fetch(herokuURL)
        .then((response) => response.json())
        .then((result) => setRecipe(result));
}

const createRecipes = async (recipe) => {
    await fetch(herokuURL, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(recipe)
    })
    getRecipes();
};

const updateRecipe = async (recipe, id) => {
    // make put request to create people
    await fetch(herokuURL + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    });
    // update list of recipes
    getRecipes();
};

const deleteRecipe = async (id) => {
    // make delete request to create recipes
    await fetch(herokuURL + id, {
      method: "delete",
    });
    // update list of recipes
    getRecipes();
};


useEffect(() => {
  getRecipes();
}, []);
  
useEffect(() => getRecipes(), []);

if (setRecipes === null) {
  return <h1>Loading</h1>
}

return (
  <Router>
    <Nav />
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/recipe"
        element={
          <CustomRecipes
            herokuURL={herokuURL}
            recipe={recipe}
            createRecipes={createRecipes}
          />
        }
      />
      <Route
        path="/recipe/:id"
        element={
          <ShowCustomRecipe
            recipe={recipe}
            updateRecipe={updateRecipe}
            deleteRecipe={deleteRecipe}
          />
        }
      />
    </Routes>
  </Router>
  );
}



export default New;