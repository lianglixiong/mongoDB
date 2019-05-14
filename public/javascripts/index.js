

$(function(){
	$.ajax({
		url: '/users',
		type: 'GET',
		dataType: 'json',
		data: {},
	})
	.done(function(res) {
		console.log("success",res);
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
})