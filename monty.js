var main =function(){
	selectDoor();
	
};

var selectDoor=function(){
	/*have player select a door*/
	$('.door').click(function(){
		$('.door').removeClass('pickDoor');
		$(this).toggleClass('pickDoor');
		var pick = this.id;
		//alert(pick);
		var locs=placeGoats();
		playGame(locs,pick);
	});
	
}

var placeGoats = function(){
	//alert("In goat");
	var car = Math.floor(Math.random()*3);
	//alert(car.toString());
	var doors = ["goat","goat","goat"];
	doors[car] = "car";
	return doors;
}

var playGame = function(locs,pick){
	alert(locs[parseInt(pick)]);
}

$(document).ready(main);
