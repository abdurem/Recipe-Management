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
const { Comment } = require('../models');
const ApiError = require('../utils/ApiError');

const createComment = async (commentBody) => {
    return Comment.create(commentBody);
}

module.exports = {
    createComment,
};