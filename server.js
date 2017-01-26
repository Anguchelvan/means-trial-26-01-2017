var express =require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

//var index = require('./routes/index');
//var tasks = require('./routes/tasks');

//var port = 3000;
//view engine
//app.set('views',path.join(__dirname , 'views'));
//app.set('view engine','ejs');
//app.engine('html',require('ejs').renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({encoded : false}));

app.use(express.static(__dirname +'/views' ));
//mongodb://<dbuser>:<dbpassword>@ds131119.mlab.com:31119/angu_mongolab_test

//app.use('/',index);
//app.use('/api',tasks);
//app.listen(port,function(){
//
//	console.log("connected to the port" + port);
//})
