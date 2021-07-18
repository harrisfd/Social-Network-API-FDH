const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: new mongoose.Types.ObjectId
    },
    reactionBody: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

    username:

    {
        type: String,
        required: true
    },
});


module.export = ReactionSchema