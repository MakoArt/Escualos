const mongoose=require('mongoose')
const {Schema}=mongoose


const squatiniformesSchema=new Schema({
     nombre:String,
     cientifico:String,
     descripcion:String,
     imagen:String
})

module.exports=mongoose.model('squatiniformes',squatiniformesSchema)