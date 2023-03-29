function funBeer() {
	
	alert("Beer");
	var beerBottles=99;
	
	for (i=99; i>=0; i--){
		
		if (i>=3){
				document.getElementById("song").innerHTML+="<br><br>"+i+" bottles of beer on the wall, "+i+" bottles of beer."+"<br/>"+"Take one down, pass it around, "+(i-1)+" bottles of beer on the wall.";
			}
			else if (i==2){
				document.getElementById("song").innerHTML+="<br><br>"+i+" bottles of beer on the wall, "+i+" bottles of beer."+"<br/>"+"Take one down, pass it around, "+(i-1)+" bottle of beer on the wall.";
			}
			else if (i==1){
				document.getElementById("song").innerHTML+="<br><br>"+i+" bottle of beer on the wall, "+i+" bottle of beer."+"<br/>"+"Take one down, pass it around, no more bottles of beer on the wall.";
			}
			else {
				document.getElementById("song").innerHTML+="<br><br>"+"No more bottles of beer on the wall, no more bottles of beer."+"<br/>"+"Go to the store and buy some more, "+(i+99)+" bottles of beer on the wall.";
			}
		
	}
	
}

function funClear() {
	
	document.getElementById("song").innerHTML="";
	
}