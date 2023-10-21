const {Router} = require('express')
const router = Router()
const contactoController = require('../controllers/contactoController');

// Ruta para enviar correos desde el formulario de contacto
router.post('/contacto', contactoController);

module.exports = router;
