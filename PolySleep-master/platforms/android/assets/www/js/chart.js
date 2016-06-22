google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
	var data = [
				['', '']
				];
	var watchID;
	document.addEventListener("deviceready", function() {
		watchID = navigator.accelerometer.watchAcceleration(function(acc)
			{
				var pushme = ['', (Math.abs(parseFloat(acc.x)) + Math.abs(parseFloat(acc.y)) + Math.abs(parseFloat(acc.z)))];
				console.log(pushme);
				data.push(pushme);
				if (data.length > 100) {
					navigator.accelerometer.clearWatch(watchID);

					data = google.visualization.arrayToDataTable(data);
					$("#chartdiv").innerHTML = "";
					var chart = new google.visualization.ColumnChart(document.getElementById('chartdiv'));

					chart.draw(data, options);

				}
			},
			function() {
				alert("OH NOES!");
			},
			{frequency: 200});
	}, false);

	var options = {
		backgroundColor: "transparent",
		tooltip: {trigger: 'none'},
		hAxis: {titleTextStyle: {color: '#fff'}, textStyle: {color: '#fff'}, gridlines: {color: '#fff'}},
		vAxis: {gridlines: {color: '#fff'}, textStyle: {color: '#fff'}, baselineColor: '#fff', titleTextStyle: {color: '#fff'}},
		legend: {position: 'none'}
	};

}