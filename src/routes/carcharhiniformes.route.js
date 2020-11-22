const express=require('express')
const router=express.Router()
const carchar=require('../models/model.carcharhiniformes')


//RUTA A PAGINA DE INICIO

router.get('/listar',async(req,res)=>{
    const body=req.body
 
   try{
       const arrayCarcha=await carchar.find()
         res.render("ordencarchar",{
             arrayCarcha
         })
     console.log(arrayCarcha)

   }catch(error){
       
    console.log(error)

   }


 
})







module.exports=router