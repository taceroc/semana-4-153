/* un Ejemplo  de como se veria la ruta listar - modelo del  articulo*/
const routerx = require('express-promise-router');
const articuloController = require('../controllers/ArticuloController');
const auth = require('../middlewares/auth');

const router = routerx();



//api/api/auth
router.get('/list', articuloController.list);

// crear usuario
// encripta contraseña
router.post('/add',auth.verifyUsuario, articuloController.add);
router.put('/update',auth.verifyUsuario, articuloController.update);
router.put('/activate',auth.verifyUsuario, articuloController.activate);
router.put('/deactivate',auth.verifyUsuario, articuloController.deactivate);
//controlador: maneja la logica, lo de async().. iria en el controlador



module.exports = router;