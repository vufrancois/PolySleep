// capture callback
var captureSuccess = function(mediaFiles) {
		alert("hello");
		path = mediaFiles[0].fullPath;
		alert(JSON.stringify(mediaFiles, null, 4));
		cloud(path);
};

// capture error callback
var captureError = function(error) {
	alert("Bye");
	alert(JSON.stringify(error, null, 4));
};

var getAudio = function() {
	alert("yo");
	navigator.device.capture.captureAudio(
		captureSuccess, captureError,  {limit: 1}
	);
	alert("Yo2");
};