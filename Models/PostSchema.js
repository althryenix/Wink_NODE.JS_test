const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    hashtags: {
        type: [String],
        required: true
    },
    authorName: {
        type: String,
        default: 'Brian Fox',
        required: true
    },
    postStatus: {
        type: String,
        default: 'Draft',
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    }
});

module.exports = mongoose.model('Posts', PostSchema);