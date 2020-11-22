const mongoose=require('mongoose')
const {Schema}=mongoose


const heterodontiformesSchema=new Schema({
     nombre:String,
     cientifico:String,
     descripcion:String,
     imagen:String
})

module.exports=mongoose.model('heterodontiformes',heterodontiformesSchema)