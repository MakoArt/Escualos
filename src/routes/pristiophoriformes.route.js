const express=require('express')
const router=express.Router()
const pristi=require('../models/model.pristiophoriformes')


//RUTA A PAGINA DE INICIO

router.get('/listar',async(req,res)=>{
    const body=req.body
 
   try{
       const arrayPristio=await pristi.find()
         res.render("ordenpristiophoriformes",{
             arrayPristio
         })
     console.log(arrayPristio)

   }catch(error){
       
    console.log(error)

   }


 
})







module.exports=router