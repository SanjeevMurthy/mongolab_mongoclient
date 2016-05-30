var path=require('path');
var rootPath = path.normalize(__dirname+'/../');

module.exports={
	dev :{
		rootPath:rootPath,
		db:'mongodb://localhost/corporate',
		port:process.env.PORT || 3030


	},
	prod : {
		rootPath:rootPath,
		db:'mongodb://admin:admin@ds015953.mlab.com:15953/corporate',
		port:process.env.PORT || 80

	}
}