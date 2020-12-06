const controller = require('./controller_veiculo');

class VeiculoRouter{
    config(router){
        router.get('/veiculos/list', controller.findAll);
        router.get('/veiculos/formulario', controller.formulario);
        router.post('/veiculos/cadastrar', controller.save);
    }
}

module.exports = new VeiculoRouter();
