const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Reaction = require("./Reaction")
const ThoughtSchema = new Schema({
    thoughtText: {
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

    reactions:
        [
            {
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
            }
        ]
});


ThoughtSchema.virtual("reactionCount")
    .get(function () {
        return this.reactions.length
    })
const Thought = mongoose.model("Thought", ThoughtSchema);
module.exports = Thought;
