const express = require("express");
const router = express.Router();
const Recipe = require("./recipeModel");

router.route("/recipe").post((req, res) => {
    const title = req.body.title;
    const diet_label = req.body.diet_label;
    const image = req.body.image;
    const ingredients = req.body.ingredients;
    const newRecipe = new Recipe({
        title,
        diet_label,
        image,
        ingredients
    })

    newRecipe.save();
})

router.route("/").get((req, res) => {
    Recipe.find()
        .then(foundRecipes => res.json(foundRecipes))
})

module.exports = router;

