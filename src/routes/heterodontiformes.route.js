const express=require('express')
const router=express.Router()
const hetero=require('../models/model.heterodontiformes')


//RUTA A PAGINA DE INICIO

router.get('/listar',async(req,res)=>{
    const body=req.body
 
   try{
       const arrayHetero=await hetero.find()
         res.render("ordenhetero",{
             arrayHetero
         })
     console.log(arrayHetero)

   }catch(error){
       
    console.log(error)

   }


 
})



