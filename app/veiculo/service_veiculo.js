class VeiculoService{

    constructor(){
        this.veiculos = [
            {id:1, marca: "Citroen", modelo: "c3", cor: "vermelho", ano: 1999 },
            {id:2, marca: "Renault", modelo: "sandero", cor: "preto", ano: 2020 },
            {id:3, marca: "Fiat", modelo: "toro", cor: "branco", ano: 2018 },
            {id:4, marca: "Honda", modelo: "fit", cor: "azul", ano: 2019 }
        ]

        this.findAll = this.findAll.bind(this);
        this.findById = this.findById.bind(this);
        this.save = this.save.bind(this);
        this.insert = this.insert.bind(this);
    }

    findAll(){
        return this.veiculos;
    }

    findById(id){
        if(id){
            return this.veiculos.find(element => element.id == id);
        } 
        return null;
    }

    save(veiculo){
        if(!veiculo.id){
           this.insert(veiculo);
        }else {
            this.update(veiculo);
        }
    }

    insert(veiculo){
        veiculo.id = new Date().getTime();
        this.veiculos.push(veiculo);
    }

    update(veiculo){
        return this.veiculos.forEach(item => {
                    if(item.id === veiculo.id){
                        item.marca = veiculo.marca, 
                        item.modelo =veiculo.modelo, 
                        item.cor= veiculo.cor, 
                        veiculo.ano= veiculo.ano
                    }
                });
    }
}

module.exports = new VeiculoService();