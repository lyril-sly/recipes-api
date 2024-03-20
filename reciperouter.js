import { Router } from "express";
import { addRecipe, getRecipes, getRecipe, updateRecipe, deleteRecipe } from "./controllers/recipes.controller.js";


 const router = Router()
 

router.post('/recipes', addRecipe,)

router.get('/recipes', getRecipes )

router.get('/recipes/:id', getRecipe )

router.patch('/recipes/:id', updateRecipe)

router.delete('/recipes/:id', deleteRecipe)

export default router