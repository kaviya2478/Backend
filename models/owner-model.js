const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.01:27017/backend");

const ownerSchema = mongoose.Schema({
    fullname:{
        type:String,
        minLength:3,
        trim:true,
    },
    email:String,
    password:String,
    products:{
        type:Array,
        default:[]
    },
    picture:String,
    gstin: String,
});

module.exports = mongoose.model("owner", ownerSchema);