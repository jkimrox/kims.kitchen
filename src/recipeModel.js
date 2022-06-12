const mongoose = require("mongoose");

const recipesSchema = {
    title: String,
    diet_label: String,
    image: String,
    ingredients: String,
}

const Recipe = mongoose.model("Recipe", recipesSchema)

module.exports = Recipe;