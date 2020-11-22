const{Router}=require('express')
const router=Router()


//RUTA A PAGINA DE INICIO

router.get('/',(req,res)=>{
res.render('index')
})

router.get('/instrucciones',(req,res)=>{
res.render('instrucciones')
})









module.exports=router