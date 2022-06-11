require('../config/database');
const RecipesModel = require('../model/Recipes');

const RecipesService = {

    create : async (payload) =>{

        try {
            const myRecipe =  await RecipesModel.create(payload)
            return {
                data: {
                    myRecipe,
                    created : true
                }
            } 
        } catch (error) {
            return {
                data: {
                    message:'something went wrong, try again!',
                    created : false
                }
            } 
        }

    },

    getOne : async (req, res) =>{
        const id =req.params.id
        const myRecipe =  await RecipesModel.findById(id)
        return res.status(200).send(myRecipe)
    },

    getAll : async (req, res) =>{
        const myRecipe =  await RecipesModel.find({})
        return res.status(200).send(myRecipe)
    },

    update : async (req, res) =>{ 
        const id = req.params.id
        const dataToUpdate = req.body
        const myRecipe =  await RecipesModel.findByIdAndUpdate({ _id: id}, dataToUpdate)
        return res.status(200).send(myRecipe)
    },

    delete : async (req, res) =>{
        const id = req.params.id
        const myRecipe =  await RecipesModel.findByIdAndRemove({ _id: id})
        return res.status(200).send( {msg: `Recipe ${myRecipe.name} was removed!` } )
    }
}


module.exports = RecipesService