import React, { useState, useEffect } from 'react';
import axios from 'axios';



function Create() {
    const [recipe, setRecipe] = useState("")
    const [ home, setHome ] = useState("")

    useEffect(() => {
        axios.get("https://kim-kitchen.herokuapp.com/").then(function(response) {
            setHome(response.data)
        })
    }, [])


    async function postRecipe(e) {
        e.preventDefault()

        try {
            await axios.post("https://kim-kitchen.herokuapp.com/recipe", {
                recipe
            })
        }   catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="App">
            <form onSubmit={postRecipe}>
                <input type="text" value={recipe} onChange={(e) => setRecipe(e.target.value)} />
                <button type="submit">Send Name</button>
            </form>
            {home}
        </div>
    )

}

export default Create