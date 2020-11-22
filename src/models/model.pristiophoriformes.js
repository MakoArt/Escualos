const mongoose=require('mongoose')
const {Schema}=mongoose


const pristiophoriformesSchema=new Schema({
     nombre:String,
     cientifico:String,
     descripcion:String,
     imagen:String
})

module.exports=mongoose.model('pristiophoriformes',pristiophoriformesSchema)