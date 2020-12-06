const service = require('./service_veiculo');

class VeiculoController {

    findAll(req, res){
        const veiculos = service.findAll();
        res.render('veiculos/list.html', {veiculos});
    }

    formulario(req, res){
        const id = parseInt(req.query.id) || 'novo' 
        let veiculo = null;
        if(id && id !== 'novo' ){
            veiculo = service.findById(id);
        }
        res.render('veiculos/formulario.html', {veiculo});
    }

    save(req, res){
        let { id , marca, modelo, cor, ano } = req.body;
        id = parseInt(id);
        ano = parseInt(ano);
        const veiculo = {
            id,
            marca,
            modelo,
            cor, 
            ano
        }
        service.save(veiculo);
        res.redirect('/veiculos/list');
    }
}

module.exports = new VeiculoController();