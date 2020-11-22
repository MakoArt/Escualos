const express=require('express')
const router=express.Router()
const lamni=require('../models/model.lamniformes')


//RUTA A PAGINA DE INICIO

router.get('/listar',async(req,res)=>{
    const body=req.body
 
   try{
       const arrayLamni=await lamni.find()
         res.render("ordenlamni",{
             arrayLamni
         })
     console.log(arrayLamni)

   }catch(error){
       
    console.log(error)

   }


 
})



