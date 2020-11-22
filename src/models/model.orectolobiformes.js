
const orectolobiformesSchema=new Schema({
    nombre:String,
    cientifico:String,
    descripcion:String,
    imagen:String
})

module.exports=mongoose.model('orectolobiformes',orectolobiformesSchema)