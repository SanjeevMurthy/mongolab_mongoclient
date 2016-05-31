var express=require('express'),
	bodyParser=require('body-parser'),
	cookieparser=require('cookie-parser');


var config=require('./config/config.js')['prod'];
var db = require('./db/db.js');

var app=express();
	app.use(cookieparser());
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.json());



require('./routes/routes.js')(app);

db.connect(config.db, function(err) {
	(err)?error(err):success(app);
});


function error(err){
	console.log('Unable to connect to Mongo.');
    process.exit(1);
}

function success(app){
	console.log("db connection estlablished !!");
    app.listen(config.port, function() {
      console.log("App runnin on port : "+config.port);
    });
}
