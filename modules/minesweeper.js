Array.prototype.shuffle = function() {
    var input = this;
     
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
         
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    return input;
}

function generateInitialArray(){
	funcArray = []
	for(i=0; i < 64; i++){
		if (i < 10){
			funcArray.push("||:bomb:||");
		} else {
			funcArray.push("safe");
		}
	}
	return funcArray;
}



//this function should accept firstArray as an argument
function createGameArray(arr){
	funcArray = []
	for(i=0; i < 8; i++){
		tempArray = arr.splice(0,8);
		funcArray.push(tempArray);
	}
	return funcArray;
}


function prepareGameArray(arr){
	for(i = 0; i < 8; i++){
		for(j = 0; j < 8; j++){
			counter = 0;
			if (arr[i][j] == "safe"){
				for(k = -1; k <= 1; k++){
					for(l = -1; l <= 1; l++){
						if(arr[i + k]){
							if(arr[i + k][j + l] == "||:bomb:||"){
								counter ++;
							}
						}
					}
				}
				arr[i][j] = counter;
			}
		}
	}
}

function gameArrayToEmoji(arr){
	for(i = 0; i < 8; i++){
		for(j = 0; j < 8; j++){
			switch(arr[i][j]){
				case 1:
				arr[i][j] = "||:one:||";
				break;
				case 2:
				arr[i][j] = "||:two:||";
				break;
				case 3:
				arr[i][j] = "||:three:||";
				break;
				case 4:
				arr[i][j] = "||:four:||";
				break;
				case 5:
				arr[i][j] = "||:five:||";
				break;
				case 6:
				arr[i][j] = "||:six:||";
				break;
				case 7:
				arr[i][j] = "||:seven:||";
				break;
				case 8:
				arr[i][j] = "||:eight:||";
				break;
				case 0:
				arr[i][j] = "||  ||";
				break;
			}
		}
	}
}

firstArray = generateInitialArray()
firstArray.shuffle();
gameArray = createGameArray(firstArray);

prepareGameArray(gameArray);
gameArrayToEmoji(gameArray);
module.exports = gameArray;