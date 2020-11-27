var handlebars = require('handlebars');
var fs = require('fs');

handlebars.registerHelper('up', function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
})

handlebars.registerHelper('ups', function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1) + 's';
})

var package = fs.readFileSync('./templates/package.hbs').toString('utf8');
var index = fs.readFileSync('./templates/index.hbs').toString('utf8');
var route = fs.readFileSync('./templates/route.hbs').toString('utf8');
var controller = fs.readFileSync('./templates/controller.hbs').toString('utf8');
var service = fs.readFileSync('./templates/service.hbs').toString('utf8');
var repository = fs.readFileSync('./templates/repository.hbs').toString('utf8');
var model = fs.readFileSync('./templates/model.hbs').toString('utf8');
var database = fs.readFileSync('./templates/database.hbs').toString('utf8');
var indexConfig = fs.readFileSync('./templates/indexconfig.hbs').toString('utf8');

var packageData = { 
    "project" : {
        "name" : "test-project",
        "author" : "yourself"
    }
} 
var data = {
    "name" : "product"
}

var packageTemplate = handlebars.compile(package);
var indexTemplate = handlebars.compile(index);
var routeTemplate = handlebars.compile(route);
var controllerTemplate = handlebars.compile(controller);
var serviceTemplate = handlebars.compile(service);
var repositoryTemplate = handlebars.compile(repository);
var modelTemplate = handlebars.compile(model);
var databaseTemplate = handlebars.compile(database);
var configTemplate = handlebars.compile(indexConfig);

 
var packageResult = packageTemplate(packageData);
var indexResult = indexTemplate(data);
var routeResult = routeTemplate(data);
var controllerResult = controllerTemplate(data);
var serviceResult = serviceTemplate(data);
var repositoryResult = repositoryTemplate(data);
var modelResult = modelTemplate(data);
var databaseResult = databaseTemplate(data);
var configResult = configTemplate();

var dir = './tmp/';
var srcDir = './tmp/src/';
var routeDir = './tmp/src/routes/';
var controllerDir = './tmp/src/controllers/';
var serviceDir = './tmp/src/services/';
var repositoryDir = './tmp/src/repositories/';
var modelDir = './tmp/src/models/';
var configDir = './tmp/src/config/';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

if (!fs.existsSync(srcDir)){
    fs.mkdirSync(srcDir);
}

if (!fs.existsSync(routeDir)){
    fs.mkdirSync(routeDir);
}

if (!fs.existsSync(controllerDir)){
    fs.mkdirSync(controllerDir);
}

if (!fs.existsSync(serviceDir)){
    fs.mkdirSync(serviceDir);
}

if (!fs.existsSync(repositoryDir)){
    fs.mkdirSync(repositoryDir);
}

if (!fs.existsSync(modelDir)){
    fs.mkdirSync(modelDir);
}

if (!fs.existsSync(configDir)){
    fs.mkdirSync(configDir);
}

fs.writeFile(dir + 'package.json', packageResult, function (err) {
    if (err) throw err;
    console.log('Saved package');
});

fs.writeFile(dir + 'index.js', indexResult, function (err) {
    if (err) throw err;
    console.log('Saved index');
});

fs.writeFile(routeDir + data.name + '.js', routeResult, function (err) {
    if (err) throw err;
    console.log('Saved route');
});

fs.writeFile(controllerDir + data.name + '.js', controllerResult, function (err) {
    if (err) throw err;
    console.log('Saved controller');
});

fs.writeFile(serviceDir + data.name + '.js', serviceResult, function (err) {
    if (err) throw err;
    console.log('Saved service');
});

fs.writeFile(repositoryDir + data.name + '.js', repositoryResult, function (err) {
    if (err) throw err;
    console.log('Saved repository');
});

fs.writeFile(modelDir + data.name + '.js', modelResult, function (err) {
    if (err) throw err;
    console.log('Saved model');
});

fs.writeFile(configDir + 'database.js', databaseResult, function (err) {
    if (err) throw err;
    console.log('Saved database');
});

fs.writeFile(modelDir + 'index.js', configResult, function (err) {
    if (err) throw err;
    console.log('Saved model exporter');
});