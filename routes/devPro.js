const express = require('express');
const router = express.Router();
const RecipesController = require('../controller/RecipesController')

router.post('/', RecipesController.createRecipe)
router.get('/', RecipesController.readAllRecipes)
router.put('/:id', RecipesController.updateRecipe)
router.delete('/:id', RecipesController.deleteRecipe)
router.get('/:id', RecipesController.findRecipe)


module.exports = router;