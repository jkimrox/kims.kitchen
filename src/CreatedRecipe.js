import React, {useEffect, useState} from 'react';
import './createdrecipes.css'

function CreatedRecipes() {
    const [recipes, setRecipes] = useState([{
        title: '',
        diet_label: '',
        image: '',
        ingredients: ''
    }])

    useEffect(() =>{
        fetch("https://kim-kitchen.herokuapp.com/").then(res =>{
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setRecipes(jsonRes));
    })
    
    return <div className="created-recipe">
        <h1>Family Recipes</h1>
        {recipes.map(recipe =>
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.diet_label}</p>
            <ul>
                <li>{recipe.ingredients}</li>
            </ul>
            <img className="food-image" src={recipe.image} alt=""/>
        </div>
        )}
    </div>
}

export default CreatedRecipes;