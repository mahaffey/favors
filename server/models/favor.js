const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define our model
const favorSchema = new Schema({
    posted_by: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },

    volunteer: {
        accepted: {
            type: Boolean,
            required: false
        },

        pending: {
            type: Boolean,
            required: false
        },

        user: {
            type: Schema.Types.ObjectId,
            required: false
        }
    },

    poster_is_offering_favor: {
        type: Boolean,
        required: true
    } ,

    description: {
        type: String,
        required: true
    },

    long_description: {
        type: String,
        required: false
    },

    category: {
        type: String,
        required: true
    },

    cost: {
        type: Number,
        required: true
    },

    is_completed: {
        type: Boolean,
        default: false
    },

    minimum_rep: {
        type: Number,
        default: 10
    },

    due_date: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: false
    }
},
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
)

// Create the model class
const ModelClass = mongoose.model('favor', favorSchema)

// Export the model
module.exports = ModelClass



