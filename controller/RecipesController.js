require('../config/database');
const RecipesModel = require('../models/Recipe');

const Recipes = {

    createRecipe : async (req, res) =>{
        const myRecipe =  await RecipesModel.create(req.body)
        return res.status(201).send(myRecipe)
    },

    findRecipe : async (req, res) =>{
        const id =req.params.id
        const myRecipe =  await RecipesModel.findById(id)
        return res.status(200).send(myRecipe)
    },

    readAllRecipes : async (req, res) =>{
        const myRecipe =  await RecipesModel.find({})
        return res.status(200).send(myRecipe)
    },

    updateRecipe : async (req, res) =>{ 
        const id = req.params.id
        const dataToUpdate = req.body
        const myRecipe =  await RecipesModel.findByIdAndUpdate({ _id: id}, dataToUpdate)
        return res.status(200).send(myRecipe)
    },

    deleteRecipe : async (req, res) =>{
        const id = req.params.id
        const myRecipe =  await RecipesModel.findByIdAndRemove({ _id: id})
        return res.status(200).send( {msg: `Recipe ${myRecipe.name} was removed!` } )
    },
    updateImage :  async (req, res) =>{
        const id = req.params.idRecipe
        let payload = null

        if (req.files.img_recipe) payload = req.files.img_recipe[0].filename;

        try {
            await RecipesModel.findByIdAndUpdate({ _id: id }, {img_recipe: payload})
        } catch (error) {
            console.error(error);
        }
        return res.status(200).json(req.files)
    }
}


module.exports = Recipes