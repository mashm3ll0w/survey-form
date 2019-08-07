$(document).ready(function() {
	$("form#survey").submit(function(event) {
		event.preventDefault();

		var name = $("input#name").val();
		var food = $("input#food").val();
		var music = $("input#music").val();
		var gender = $("input[name='gender']:checked").val();
		var opSystem = $("#operatingSystem").val();

		//alert("Thank you, " + name + ". Next time, you will find " + food + " here for you and " + music + " playing in the background. You are special because not many " + gender + "s can survive a minute using " + opSystem + " OS!!");

		$("div.catch-form").text("Thank you, " + name + ". Next time, you will find " + food + " here for you and " + music + " playing in the background. You are special because not many " + gender + "s can survive a minute using " + opSystem + " OS!!");
	});
});
