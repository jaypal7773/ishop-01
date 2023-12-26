const mongoose = require('mongoose')

const ColorSchema = mongoose.Schema(
    {     
        name:{
            type: String
        },
        slug: {    
            type: String
        },
        status: {
            type: Boolean,
            default : true
        },
        color:{
            type: String,
            default: null
        }
    },
    {
        timestamps : true
    }
)

const Color = mongoose.model("Color" , ColorSchema)

module.exports = Color