import { Schema, model } from "mongoose"

const ProductSchema = new Schema({
    name: String,
    value: Number,
})

const ProductModel = model('Product', ProductSchema)

export default ProductModel