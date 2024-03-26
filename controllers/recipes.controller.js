import {recipeModel} from '../models/recipe.js'


export const addRecipe =  async (req, res, next) => {
try {
    console.log(req.body)
     const createResult = await recipeModel.create({
        ...req.body,
        image: req.file.filename
     })
     res.status(201).json(createResult)
} catch (error) {
    // forward to express error handler
    next(error)
}
}

export const getRecipes = async (req, res, next) => {
   try {
    const findResult = await recipeModel.find()
    res.json(findResult)
     
   } catch (error) {
    next(error)
   }
}

export const getRecipe = async (req, res, next) => {
    try {
        const findResult = await recipeModel.findById(req.params.id)
        if(findResult === null){
       return res.status(404).json({message: `Recipe with id ${findResult}`})
    } 
    } catch (error) {
        next(error)
    }
    
}

export const updateRecipe =  (req, res) => {
    res.send('update something')
}

export const deleteRecipe =  (req, res) => {
    res.send('delete it now')
}
