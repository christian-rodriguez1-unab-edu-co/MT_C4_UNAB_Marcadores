const express=require('express')
const router=express.Router()
const marcadorescontroller=require('../controllers/marcadorescontroller')

module.exports=()=>{
    //llamado get de marcadores
    router.get('/marcadores',marcadorescontroller.list)
    
    //llamado post de marcadores
    router.post('/marcadores',marcadorescontroller.add)

    //llamado put de marcadores
    router.put('/marcadores/:id',marcadorescontroller.update)

    //llamado delete de usuarios
    router.delete('/marcadores/:id',marcadorescontroller.delete)

    //llamado de marcadores por usuarios
    router.get('/marcadoresusuario/:id',marcadorescontroller.listbyuser)

    return router
}
