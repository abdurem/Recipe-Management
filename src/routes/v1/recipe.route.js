const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const recipeController = require('../../controllers/recipe.controller');

const router = express.Router();

router
    .route('/')
    .post(recipeController.createRecipe)
    .get(recipeController.getRecipes);

router
    .route('/:recipeId')
    .get(recipeController.getRecipe)
    .patch(recipeController.updateRecipe)
    .delete(recipeController.deleteRecipe);

router
    .route('/:recipeId/comment')
    .patch(recipeController.commentOnRecipe);

module.exports = router;