
var employeeDAO=require('../business/employeeDAO.js');


module.exports=function(app){

	
	app.get('/',function (req,res) {
		res.send('Welcome to MongoClient');
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