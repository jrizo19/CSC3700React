const Ingredients = require("../models/ingredients");
exports.getIngredients = (request, response) => {
    response.json(Ingredients.getIngredients());
};