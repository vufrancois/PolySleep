jQuery.fn.rotate = function(degrees) {
	$(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
		'-moz-transform' : 'rotate('+ degrees +'deg)',
		'-ms-transform' : 'rotate('+ degrees +'deg)',
		'transform' : 'rotate('+ degrees +'deg)'});
	return $(this);
};

$(document).ready(function() {
	$("#app").pagecontainer({defaults: true});
	console.log("attached pagecontainer");

	var dot = true;
	setInterval(function(){
		var d = new Date(); // for now
		if (dot === true) {
			$("#sleepTimerPage .timerText").html(d.getHours() + ":" + (d.getMinutes() + 10));
			dot = false;
		}
		else {
			$("#sleepTimerPage .timerText").html(d.getHours() + " " + (d.getMinutes() + 10));
			dot = true;
		}
	}, 1000);
});