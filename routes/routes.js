
var employeeDAO=require('../business/employeeDAO.js');


module.exports=function(app,config){

	
	app.get('/',function (req,res) {
		res.send('Welcome to MongoClient');
	});

	app.get('/loaderio*',function(req,res){
		res.sendFile(config.rootPath+"/loaderio-122c660bd2f360f9fd590e83bc7dc9a7.txt");
	});

	
	app.get('/employee',function(req,res){
		console.log("/employee routes");
			employeeDAO.getAllEmployees(function(err,response){
				if(err){
					res.end(err);
				}else{
					res.status(200);
					res.json(response);
					res.end();
				}
			});
	});

	app.get('/employee/:id',function(req,res){
		console.log("/employee:id routes");
			employeeDAO.getEmployee(req,function(err,response){
				if(err){
					res.end(err);
				}else{
					res.status(200);
					res.json(response);
					res.end();
				}
			});
	});
}