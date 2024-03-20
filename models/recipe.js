import { Schema, model } from "mongoose";

const recipeScheme = new Schema({
    title: {type: String, require: true},
    description: {type: String, require: true},
    image: {type: String, require: true},
    country: {type: String}
})

export const recipeModel = model('Recipe', recipeScheme, 'recipes')