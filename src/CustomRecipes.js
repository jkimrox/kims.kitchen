import React, { useState } from "react";

function CustomRecipes(props) {

    const [newForm, setNewForm] = useState({
        title: "",
        diet_label: "",
        image: "",
        ingredients: "",
    });

    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createRecipes(newForm);
        setNewForm({
            title: "",
            diet_label: "",
            image: "",
            ingredients: "",
        });
    };

    return (
        <section className="recipe-page">
            <h1 className="new-recipe-page">Hi</h1>
            <form className="create-recipe" onSubmit={handleSubmit}>
            <input
                type="text"
                value={newForm.title}
                name="title"
                placeholder="title"
                onChange={handleChange}
            />
            <input
                type="text"
                value={newForm.diet_label}
                name="diet_label"
                placeholder="diet_label"
                onChange={handleChange}
            />
            <input
                type="text"
                value={newForm.image}
                name="image"
                placeholder="image"
                onChange={handleChange}
            />
            <input
                type="text"
                value={newForm.ingredients}
                name="ingredients"
                placeholder="ingredients"
                onChange={handleChange}
            />
        <input id="create-button" type="submit" value="Create Recipe" />
            </form>
        </section>
    )
}



export default CustomRecipes;