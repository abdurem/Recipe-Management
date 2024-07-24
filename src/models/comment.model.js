const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { date } = require('joi/lib');

const commentSchema = mongoose.Schema(
{
    comment: {
        type: String,
        required: true,
        trim: true,
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
}, 
{
    timestamps: true,
}
);

// add plugin that converts mongoose to json
commentSchema.plugin(toJSON);
commentSchema.plugin(paginate);

// export
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;