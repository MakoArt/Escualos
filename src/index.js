const express=require('express')
const app=express()
const cors=require('cors')
const bodyParser=require('body-parser')
const morgan=require('morgan')
const dotenv=require('dotenv').config()
const mongoose=require('mongoose')


/*CONFIGURACION DE CORS PARA TRABAJAR CON REACT ********************************************************************



********************************************************************************************************************/

/*
const whiteList=['http://localhost:3000']
const corsOptions={
    origin:(origin,callback)=>{
        const existe=whiteList.some(dominio=>dominio===origen)
        
        if(existe){
            callback(null,true)
        }else{
            callback(new Error('no permitido por cors'))
        }
    
    
    }
}*/

/*CONFIGURACIÓN DE PUERTO*************************************************************************************************

**************************************************************************************************************************/

const port=process.env.PORT || 5000
const host=process.env.HOST || '0.0.0.0'
/*CONEXION DE BASE DE DATOS *****************************************************************************************************


*******************************************************************************************************************************/

const URI=`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@cluster0.uogjp.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`

mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log('base de datos conectada'))
.catch(error=>console.log(error))

/*MOTOR DE PLANTILLAS EJS*************************************************************************************************************


***************************************************************************************************************************/

app.set('view engine', 'ejs')
app.set('views',__dirname + '/views')

/*ARCHIVOS PÚBLICOS************************************************************************************************************************

*****************************************************************************************************************************/

app.use(express.static(__dirname + '/public'))

/*CONFIGURAMOS BODY-PARSER *************************************************************************************************
f
f
*****************************************************************************************************************************/

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

/*CONFIGURAMOS MORGAN******************************************************************************************************


*************************************************************************************************************************/

app.use(morgan('dev'))

/*CORS **************************************************************************************************************************


*******************************************************************************************************************************/

app.use(cors({origen:'*'}))

/*ROUTES*********************************************************************************************************************


**************************************************************************************************************************/
app.use('/',require('./routes/especies.route'))
app.use('/instrucciones',require('./routes/especies.route'))
app.use('/carcharhiniformes',require('./routes/carcharhiniformes.route'))
app.use('/heterodontiformes',require('./routes/heterodontiformes.route'))
app.use('/hexanquiformes',require('./routes/hexanquiformes.route'))
app.use('/lamniformes',require('./routes/lamniformes.route'))
app.use('/orectolobiformes',require('./routes/orectolobiformes.route'))
app.use('/pristiophoriformes',require('./routes/pristiophoriformes.route'))
app.use('/squatiniformes',require('./routes/squatiniformes.route'))



/*lANZAMOS SERVIDOR*****************************************************************************************************************


************************************************************************************************************************************/


app.listen(port,host,()=>console.log('servidor corriendo por el puerto',port))