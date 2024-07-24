const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');

const { recipeService, commentService } = require('../services');

const createRecipe = catchAsync(async (req, res) => {
    const recipe = await recipeService.createRecipe(req.body);
    res.status(httpStatus.CREATED).send(recipe);
    });


const getRecipes = catchAsync(async (req, res) => {
    const filter = req.query;
    const options = req.query;
    const result = await recipeService.queryRecipes(filter, options);
    res.send(result);
    });

const getRecipe = catchAsync(async (req, res) => {
    const recipe = await recipeService.getRecipeById(req.params.recipeId);
    if (!recipe) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Recipe not found');
    }
    res.send(recipe);
    });

const updateRecipe = catchAsync(async (req, res) => {
    const recipe = await recipeService.updateRecipeById(req.params.recipeId, req.body);
    res.send(recipe);
    }
);

const deleteRecipe = catchAsync(async (req, res) => {
    await recipeService.deleteRecipeById(req.params.recipeId);
    res.status(httpStatus.NO_CONTENT).send();
    });
    

const commentOnRecipe = catchAsync(async (req, res) => {
    const comment = await commentService.createComment(req.body);
    const recipe = await recipeService.commentOnRecipe(req.params.recipeId, comment);
    res.send(recipe);
    });


module.exports = {
    createRecipe,
    getRecipes,
    getRecipe,
    updateRecipe,
    deleteRecipe,
    commentOnRecipe,
};