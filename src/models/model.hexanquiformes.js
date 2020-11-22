const mongoose=require('mongoose')
const {Schema}=mongoose


const hexanquiformesSchema=new Schema({
     nombre:String,
     cientifico:String,
     descripcion:String,
     imagen:String
})

module.exports=mongoose.model('hexanquiformes',hexanquiformesSchema)