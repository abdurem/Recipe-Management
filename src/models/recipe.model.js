const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');

const recipeSchema = mongoose.Schema(
{
    title: {
        type: String,
        required: true,
        trim: true,
    },
    ingredients: {
        type: String,
        required: true,
        trim: true,
    },
    instructions: {
        type: String,
        required: true,
        trim: true,
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true,
    },
    comments: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Comment',
        },
    ],
}, 
{
    timestamps: true,
}
);

// add plugin that converts mongoose to json
recipeSchema.plugin(toJSON);
recipeSchema.plugin(paginate);


/**
 * @typedef Recipe
 */
const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;