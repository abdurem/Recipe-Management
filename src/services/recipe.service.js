/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */

const mongoose = require('mongoose');
const httpStatus = require('http-status');
const { Recipe } = require('../models');
const ApiError = require('../utils/ApiError');


const queryRecipes = async (filter, options) => {
    const recipes = await Recipe.paginate(filter, options);
    return recipes;
}

const getRecipeById = async (id) => {
    return Recipe.findById(id);
}

const createRecipe = async (recipeBody) => {
    return Recipe.create(recipeBody);
}

const updateRecipeById = async (recipeId, updateBody) => {
    const recipe = await getRecipeById(recipeId);
    if (!recipe) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Recipe not found');
    }
    Object.assign(recipe, updateBody);
    await recipe.save();
    return recipe;
}

const deleteRecipeById = async (recipeId) => {
    const recipe = await getRecipeById(recipeId);
    if (!recipe) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Recipe not found');
    }
    await recipe.remove();
    return recipe;
}

const commentOnRecipe = async (recipeId, commentBody) => {
    const recipe = await getRecipeById(recipeId);
    if (!recipe) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Recipe not found');
    }
    recipe.comments.push(commentBody);
    await recipe.save();
    return recipe;
}

module.exports = {
    queryRecipes,
    getRecipeById,
    createRecipe,
    updateRecipeById,
    deleteRecipeById,
    commentOnRecipe
}