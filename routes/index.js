// Get all of our friend data
var data = require('../data.json');

exports.view = function(request, response){
	console.log(data);
	// get the data variable from the require() statement
	// sends it as an argument to response.render()
	// pass data along directly; contents accesssible from within template 
	response.render('index', data);
};
