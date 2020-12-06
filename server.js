const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const router = require('./router.js');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

const templatePath = path.join(__dirname, 'views')
const env = nunjucks.configure([templatePath], {
    watch: true,
    autoescape: true,
    express: app
});

router.configRouters(app);



const PORT = 3000;

app.listen(PORT, () => console.log(`Server runing in http://localhost:${PORT}`));