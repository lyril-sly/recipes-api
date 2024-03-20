import {recipeModel} from '../models/recipe.js'


export const addRecipe =  async (req, res) => {
 const createResult = await   recipeModel.create(req.body)
 res.json(createResult)
}

export const getRecipes = (req, res) => {
    res.send('get recipes')
}

export const getRecipe = (req, res) => {
    res.send('get an id')
}

export const updateRecipe =  (req, res) => {
    res.send('update something')
}

export const deleteRecipe =  (req, res) => {
    res.send('delete it now')
}