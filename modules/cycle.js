function cycle(i, array){
	i = i % array.length + 1;
}

module.exports = function(i, array){
	return cycle(i, array);
}