const express=require('express')
const router=express.Router()
const squa=require('../models/model.squatiniformes')


//RUTA A PAGINA DE INICIO

router.get('/listar',async(req,res)=>{
    const body=req.body
 
   try{
       const arraySqua=await squa.find()
         res.render("ordensqua",{
             arraySqua
         })
     console.log(arraySqua)

   }catch(error){
       
    console.log(error)

   }


 
})







module.exports=router