const routes = [
    require('./app/veiculo/router_veiculo'),
]

function configRouters(app){
    for (route of routes){
        route.config(app);
    }
}
module.exports = {
    configRouters
}