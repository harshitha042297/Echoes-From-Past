import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    // creating as object because we need type and default
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

// converting schema to model
var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;