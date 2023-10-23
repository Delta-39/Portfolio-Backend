const {Router} = require('express')
const router = Router()
const contactoController = require('../controllers/contactoController');

// Ruta para enviar correos desde el formulario de contacto
router.post('/contacto', async (req,res) =>{

    try {
        const result = await contactoController(req.body)
        res.status(200).send(result)
    } catch (error) {
        console.log('Error al enviar el correo:', error);
        res.status(500).send('Error al enviar el correo');
    }
} );


module.exports = router;
