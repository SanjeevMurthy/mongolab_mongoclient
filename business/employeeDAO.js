var db = require('../db/db.js')
module.exports={
	getAllEmployees:function(callback){
		var collection = db.get().collection('employees');
	  	collection.find().toArray(function(err, result) {
	    	(err)?callback(err,null):callback(null,result);
	  	});	
	},
	getEmployee:function(req,callback){
		var collection = db.get().collection('employees');
		var id=parseInt(req.params.id);
	  	collection.findOne({"employeeid":id},function(err, result) {
	  		(err)?callback(err,null):callback(null,result);
	    	
	  	});	
	}
}
