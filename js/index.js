var name = $("#name").val();
var food = $("#food").val();
var music = $("#music").val();
var gender = $("input:radio[name=gender]:checked").val();
var opSystem = $("#os").val();

$(document).ready(function() {
	$("form#survey").submit(function(event) {
		event.preventDefault();
		alert("Thank you, " + name + " for your time. Next time, you will find " + food + " here waiting for you and " + music + " playing in the background. You are special because not many " + gender + "s can survive a minute using " + opSystem + " OS!!");
	});
});
