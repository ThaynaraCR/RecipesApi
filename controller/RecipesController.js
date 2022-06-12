require('../config/database');
const RecipesModel = require('../models/Recipe');

const Recipes = {

    createRecipe : async (req, res) =>{
        try {
            const myRecipe =  await RecipesModel.create(req.body)
            return res.status(201).send(myRecipe)
        } catch (error) {
            console.log("error create recipe:", error)
            return res.status(500).send({msg: "Some thing went wrong! Try Again"})
        }
    },

    findRecipe : async (req, res) =>{
        const id =req.params.id
        try {
            const myRecipe =  await RecipesModel.findById(id)
            return res.status(200).send(myRecipe)
        } catch (error) {
            console.log("error find recipe:", error)
            return res.status(500).send({msg: "Some thing went wrong! Try Again"})
        }
     
    },

    readAllRecipes : async (req, res) =>{
        try {
            const myRecipe =  await RecipesModel.find({})
            return res.status(200).send(myRecipe)
        } catch (error) {
            console.log("error read all recipe:", error)
            return res.status(500).send({msg: "Some thing went wrong! Try Again"})
        }
    },

    updateRecipe : async (req, res) =>{ 
        const id = req.params.id
        const dataToUpdate = req.body
        try {
            const myRecipe =  await RecipesModel.findByIdAndUpdate({ _id: id}, dataToUpdate)
            return res.status(200).send({msg:"Updated!"})
        } catch (error) {
            console.log("error update recipe:", error)
            return res.status(500).send({msg: "Some thing went wrong! Try Again"})
        }

    },

    deleteRecipe : async (req, res) =>{
        const id = req.params.id
        try {
            const myRecipe =  await RecipesModel.findByIdAndRemove({ _id: id})
            return res.status(200).send( {msg: `Recipe ${myRecipe.name} was removed!` } )
        } catch (error) {
            console.log("error delete recipe:", error)
            return res.status(500).send({msg: "Some thing went wrong! Try Again"})
        }
  
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