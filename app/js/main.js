$(document).ready(function(){
	const user_id = 7;
	var api_key = '88d326ce1ef3b65d2197d436055519ce';
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;
	var yyyy = today.getFullYear();
	var hour = today.getHours() 
    var min = today.getMinutes()
    var sec = today.getSeconds()

	$( "input" )
	.keyup(function() {
	var value = $( this ).val();
	city = value;
	})
	.keyup();
	var city = "bishkek, kg 2";

	function renderWeather(type){
			$.ajax({
				url: "http://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&APPID=" + api_key,
            	dataType:"json",
				success: function(data, status){
					$("#title").text(type);
					$(".preview__wrap").empty(); 
					var counter = 0;
					$.each(data, function(index, type){
						if(counter < 1) {
							var card = '<arcticle class="preview">';
							card += '<div class="date">';
							card += "<p class='time'>"+hour + "."+min+"."+sec+"</p>";
							card += "<p>"+dd + "."+mm+"."+yyyy+"</p>";
							card += '</div>';
							card += "<h3 class='clearfix'>"+ data.name + "</h3>";
							card += '<div class="temp_val clearfix"';
							card += "<p>"+data.weather["0"].main + "</p>";
							card += "<p>"+"Humidity - " +data.main.humidity +" % "+"</p>";
							card += "<p>"+"Pressure - " +data.main.pressure +" hpa "+"</p>";
							card += "<p>"+"Wind - " +data.wind.speed +" m/s "+"</p>";
							card += '</div>';
							card += '<div class="temp"';
							card += '<div class="icon_img">';
							card += "<img class='svg' src=uploads/"+ data.weather['0'].icon + ".svg width='100' hiegth='100'>"
							card += '</div>';
							card += "<p class='main_temp'>"+ data.main.temp+" °C "+"</p>";
							card += '</div>';
							card +="</arcticle>";
							counter +=1;
						}
						$(".preview__wrap").append(card);
					});
				}
			});
		};
		renderWeather("albums");

		$("#search").click(function(e){
			e.preventDefault();
			renderWeather("albums");
		});
});
