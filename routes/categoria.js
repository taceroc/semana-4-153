const routerx = require('express-promise-router');
const categoriaController = require('../controllers/CategoriaController.js');
const auth = require("../middlewares/auth");

const router = routerx();

//api/api/auth
router.get('/list',auth.verifyUsuario, categoriaController.list);

// crear usuario
// encripta contraseña
router.post('/add',auth.verifyUsuario, categoriaController.add);
router.put('/update',auth.verifyUsuario, categoriaController.update);
router.put('/activate',auth.verifyUsuario, categoriaController.activate);
router.put('/deactivate',auth.verifyUsuario, categoriaController.deactivate);
//controlador: maneja la logica, lo de async().. iria en el controlador



module.exports = router;