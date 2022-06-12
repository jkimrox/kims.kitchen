import React, {useEffect, useState} from 'react';

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
    
    return <div>
        <h1>Created Recipes</h1>
        {recipes.map(recipe =>
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.diet_label}</p>
            <p>{recipe.image}</p>
            <p>{recipe.ingredients}</p>
        </div>
        )}
    </div>
}

export default CreatedRecipes;