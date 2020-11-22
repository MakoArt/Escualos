const express=require('express')
const router=express.Router()
const hexan=require('../models/model.hexanquiformes')


//RUTA A PAGINA DE INICIO

router.get('/listar',async(req,res)=>{
    const body=req.body
 
   try{
       const arrayHexan=await hexan.find()
         res.render("ordenhexan",{
             arrayHexan
         })
     console.log(arrayHexan)

   }catch(error){
       
    console.log(error)

   }


 
})







module.exports=router