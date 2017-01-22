console.log("no")


//variables
var gnarlyRoot = {size: 0, character: 0}
var growButton = document.getElementById("growYourTree");

//tree function to grow based on imputs
function tree(gnarlyRoot) {
	
	var gnarlyHeight = document.getElementById('gnarlyHeight').value;
	var charUse = document.getElementById('characterInput').value;
	
	var gnarlyRoot_size = gnarlyHeight;
	var gnarlyRoot_char = charUse;
	
	var numChar = 1;
	var numSpaces = gnarlyRoot_size -1;

	if (gnarlyRoot_size > 0 && gnarlyRoot_char.length === 1) {
		for (var i = 0; i < gnarlyRoot_size; i++) {
			var spaces = ' '.repeat(numSpaces);
			var character = gnarlyRoot_char.repeat(numChar);
			var gnarlyGo = spaces + character;
			
			numSpaces -= 1;
			numChar += 2;
			
			console.log(gnarlyGo);

		}
	} else {
		alert('Please enter a value in both fields!')
	}
}

//grow gnarly tree at button push
document.getElementById("growButton").addEventListener('click', tree);


document.getElementById('characterInput').addEventListener('keyup', function(e){
	if (e.which === 13) {
		tree();
	}
});

gnarlyHeight.addEventListener('keyup', function(e){
	if (e.which === 13) {
		tree();
	}
});
