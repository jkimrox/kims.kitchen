import React, {useState} from 'react';
import axios from 'axios';
import './newrecipe.css'

function NewRecipe() {
const [input, setInput] = useState({
    title: "",
    diet_label: "",
    image: "",
    ingredients: ""
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setInput(prevInput => {
            return{
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        const newRecipe = {
            title: input.title,
            diet_label: input.diet_label,
            image: input.image,
            ingredients: input.ingredients
        }
        // console.log(input);
        axios.post('https://kim-kitchen.herokuapp.com/recipe', newRecipe)
    }

    return <div className='container'>
        <h1>Create Recipe Page</h1>
        <form>
            <div className='form-group'>
                <input onChange={handleChange} name='title' value={input.title} className='form-control' autoComplete="off" placeholder="Recipe Title"></input>
            </div>

            <div className='form-group'>
                <textarea onChange={handleChange} name="diet_label" value={input.diet_label} className='form-control' autoComplete="off" placeholder="Recipe Diet Label"></textarea>
            </div>

            <div className='form-group'>
                <textarea onChange={handleChange} name="image" value={input.image} className='form-control' autoComplete="off" placeholder="Recipe Image"></textarea>
            </div>

            <div className='form-group'>
                <textarea onChange={handleChange} name="ingredients" value= {input.ingredients} className='form-control' autoComplete="off" placeholder="Recipe Ingredients"></textarea>
            </div>

            <button onClick={handleClick}>Add Recipe</button>
        </form>
    </div>
}

export default NewRecipe;