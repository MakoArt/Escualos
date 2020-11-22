const mongoose=require('mongoose')
const {Schema}=mongoose


const lamniformesSchema=new Schema({
     nombre:String,
     cientifico:String,
     descripcion:String,
     imagen:String
})

module.exports=mongoose.model('lamniformes',lamniformesSchema)