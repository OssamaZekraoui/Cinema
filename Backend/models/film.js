const mongoose=require('mongoose')
const filmSchema = mongoose.Schema({
    titre:{
        type:String,
        required:true,
        trim: true
        },
    categorie:{
        type:String,
        required:true,
        trim:true
        }, 
    annee:{
        type:Date,
        required:true,
        },
    description :{
            type : String,
            required:false,
        }
})

module.exports = mongoose.model("Film",filmSchema)