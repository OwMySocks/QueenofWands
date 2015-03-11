var main =function(){
	selectDoor();
	
};

var selectDoor=function(){
	/*have player select a door*/
	$('.door').click(function(){
		if($(this).hasClass('unclickable')){
			//alert("dont click me bro");
		}
		else{
			
		
			$('.door').removeClass('pickDoor');
			$('.door').addClass('unclickable');
			$(this).toggleClass('pickDoor');
			var pick = this.id;
			var locs=placeGoats();
			playGame(locs,pick);
			
		}
	
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
	var picked = parseInt(pick);
	var car = locs.indexOf('car');
	var goat1 = locs.indexOf("goat");
	var goat2 = locs.lastIndexOf("goat");
	document.getElementById("hosttext").innerHTML = "Now I'll reveal what's behind another door, and you can either choose your current door, or change to the remaining door."
	// if car and picked are the same, I need to find what the other two doors are, pick one at random and show it. If they are not the same, I need to show the only remaining door.
	//switch for picked
	var swapclass;
	var keepclass;
	if(car == picked){
		var flip = Math.floor(Math.random()*2);
		if (flip = 0){
			//show goat 1, make goat 2 clickable and add swappick class
			$(document.getElementById(goat1.toString())).addClass('goat');
			$(document.getElementById(goat2.toString())).addClass('swappick');
		//	$(document.getElementById(goat2.toString())).removeClass('unclickable');
			}
		else {
			//show goat2, make goat 1 clickable
			$(document.getElementById(goat2.toString())).addClass('goat');
			$(document.getElementById(goat1.toString())).addClass('swappick');
			//$(document.getElementById(goat1.toString())).removeClass('unclickable');
		}
		swapclass="goat"
		keepclass="car"
	}
	
	else if (picked == goat1){
		//show goat 2, make car clickable
		$(document.getElementById(goat2.toString())).addClass('goat');
		$(document.getElementById(car.toString())).addClass('swappick');
		//$(document.getElementById(car.toString())).removeClass('unclickable');
		swapclass="car"
		keepclass="goat"
	}
	
	else{ //picked==goat2
		//show goat 1, make car clickable
		$(document.getElementById(goat1.toString())).addClass('goat');
		$(document.getElementById(car.toString())).addClass('swappick');
		swapclass="car"
		keepclass="goat"
		//$(document.getElementById(car.toString())).removeClass('unclickable');
	}
	var currentPick = $('.pickDoor');
	$('.door').click(function(){
		var secondPick = this.id; //keep as string to do document.getElementByID(secondPick).addClass
		if($(this).hasClass('swappick')){
			//alert("You are swapping");
			currentPick.removeClass('pickDoor');
			$(this).addClass('pickDoor');
			$(this).addClass(swapclass);
			
		}
		else if($(this).hasClass('pickDoor')){
			//alert("you kept this one");
			$(this).addClass(keepclass);
		}
		else{
			//alert("I showed you this");
		}
	});
	
}

$(document).ready(main);
