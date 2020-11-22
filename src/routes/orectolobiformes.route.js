const express=require('express')
const router=express.Router()
const orecto=require('../models/model.orectolobiformes')


//RUTA A PAGINA DE INICIO

router.get('/listar',async(req,res)=>{
    const body=req.body
 
   try{
       const arrayOrecto=await orecto.find()
         res.render("ordenorecto",{
             arrayOrecto
         })
     console.log(arrayOrecto)

   }catch(error){
       
    console.log(error)

   }


 
})

