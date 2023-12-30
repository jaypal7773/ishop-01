const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema(
    {
        name:{
            type: String
        },
        slug:{
            type: String
        },
        category_id:{
            type: mongoose.Types.ObjectId,
            ref: "Category"
        },
        color_id:{
            type: mongoose.Types.ObjectId,
            ref: "Color"
        },
        image:{
            type: String,
            default: null
        },
        price:{
            type: Number
        },
        discount:{
            type: Number,
            default: 0
        },
        final:{
            type: String
        },
        status:{
            type: Boolean,
            default: true
        },
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model("Product" , ProductSchema)

module.exports = Product