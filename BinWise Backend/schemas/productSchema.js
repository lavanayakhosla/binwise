const mongoose=require('mongoose')
const productSchema= new mongoose.Schema({
    name:{
        type: String,
        minlength:[1,"Minimum length should be 5"]
    },
    assignedZone:{
        type:String,
        // minlength:[10,"minimum length should be 10 characters"]
    },
    photo:{
        type: String
    },
    price:{
        type:Number
    },
    rating:{
        type:Number,
        
    },
    status:{
        type:String,
        enum:["active","in-active"],
        default:"active"
    },
    safetyGearIssued:{
        type:Boolean,
        default:true
    }
},{timestamps:true})
const product= mongoose.model("product",productSchema)
module.exports=product