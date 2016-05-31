
var employeeDAO=require('../business/employeeDAO.js');


module.exports=function(app,config){

	
	app.get('/',function (req,res) {
		res.send('Welcome to MongoClient');
	});

	app.get('/loaderio*',function(req,res){
		res.sendFile(config.rootPath+"/loaderio-c53750dc96eb85c8552b9e6b4b9fab8b.txt");
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
		console.log("GET /employee:id routes");
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

	app.post('/employee/:id',function(req,res){
		console.log("POST /employee:id routes");
			employeeDAO.updateEmployee(req,function(err,response){
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