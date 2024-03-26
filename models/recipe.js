import { Schema, model } from "mongoose";

const recipeScheme = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    country: {type: String}
})

export const recipeModel = model('Recipe', recipeScheme, 'recipes')