const express = require('express');
const multer = require('multer');
const router = express.Router();
const multerConfig = require('../config/multer');
const authUser = require('../middlewares/auth');
const RecipesController = require('../controller/RecipesController')
const UserController = require('../controller/UserController')


router.post('/user', UserController.newUser);
router.post('/login', UserController.login);
router.use(authUser)
router.post('/', RecipesController.createRecipe)
router.post('/img/:idRecipe',  multer(multerConfig).fields([{
    name: 'img_recipe',
    maxCount: 1
}]), RecipesController.updateImage)
router.get('/', RecipesController.readAllRecipes)
router.put('/:id', RecipesController.updateRecipe)
router.delete('/:id', RecipesController.deleteRecipe)
router.get('/:id', RecipesController.findRecipe)

module.exports = router;