import { Router } from "express";
import { addRecipe, getRecipes, getRecipe, updateRecipe, deleteRecipe } from "./controllers/recipes.controller.js";
import multer from "multer";

// configure upload middleware
const upload = multer({ dest: 'uploads/images' })

// create recipes router
const router = Router()


router.post('/recipes', upload.single('image'), addRecipe)

router.get('/recipes', getRecipes)

router.get('/recipes/:id', getRecipe)

router.patch('/recipes/:id', updateRecipe)

router.delete('/recipes/:id', deleteRecipe)

export default router