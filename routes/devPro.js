const express = require('express');
const router = express.Router();
const authUser = require('../middlewares/auth');
const RecipesController = require('../controller/RecipesController')



// router.post('/login/usuario', loginController.usuario);
// router.post('/login/verEmail',  loginController.acharIdPorEmail);
// router.post('/login/resetEmail', loginController.resetEmail);
// router.post('/login/linkReset', loginController.linkReset);
// router.post('/login/resetCompleto', loginController.resetCompleto);
// router.use(authUser)
router.post('/', RecipesController.createRecipe)
router.get('/', RecipesController.readAllRecipes)
router.put('/:id', RecipesController.updateRecipe)
router.delete('/:id', RecipesController.deleteRecipe)
router.get('/:id', RecipesController.findRecipe)

module.exports = router;