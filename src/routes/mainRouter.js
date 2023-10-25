const {Router} = require('express')
const router = Router()
const contactoController = require('../controllers/contactoController');
const fs = require('fs')
const path = require('path')


//* Route for sending emails from contact form
router.post('/contact', async (req,res) =>{

    try {
        const result = await contactoController(req.body)
        res.status(200).send(result)
    } catch (error) {
        console.log('Error al enviar el correo:', error);
        res.status(500).send('Error al enviar el correo');
    }
});

//*Route for cv/resume download
router.get('/pdf',async (req,res)=>{
    try {
        const pdfPath = path.join(__dirname, '../assets', 'Martin Terribile(eng).pdf')

        const pdfStream = fs.createReadStream(pdfPath)

        res.status(200);
        res.setHeader('Content-Disposition', 'attachment; filename=Martin_Terribile.pdf');
        res.setHeader('Content-Type', 'application/pdf');
    
        // Transfiere el archivo al flujo de respuesta
        pdfStream.pipe(res);

    } catch (error) {
        console.log(error)
        res.status(500).send('server-side error')
    }
})


module.exports = router;
