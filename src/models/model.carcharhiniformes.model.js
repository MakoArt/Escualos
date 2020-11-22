const mongoose=require('mongoose')
const {Schema}=mongoose


const carcharhiniformesSchema=new Schema({
     nombre:String,
     cientifico:String,
     descripcion:String,
     imagen:String
})

module.exports=mongoose.model('carcharhiniformes',carcharhiniformesSchema)



                         
                              
                           