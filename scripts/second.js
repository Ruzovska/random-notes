var x = 'lalafa';
document.querySelector('button').onclick = function() {
	first = listOfNotes[getRandomInt(0,7)] + ' ' + listOfAccidentals[getRandomInt(0,2)] + ' ' + listOfOctavesGuitar[getRandomInt(0,5)];
	second = listOfNotes[getRandomInt(0,7)] + ' ' + listOfAccidentals[getRandomInt(0,2)] + ' ' + listOfOctavesGuitar[getRandomInt(0,5)];
	document.getElementById("first").innerHTML = first;
	document.getElementById("second").innerHTML = second;
}

function getRandomInt(min, max) {
min = Math.ceil (min);
max = Math.floor (max);
return Math.floor(Math.random()*(max-min))+min;
}

listOfNotes = ['do', 're', 'mi', 'fa', 'sol', 'la', 'si'];
listOfAccidentals = ['diesis', 'bemolle'];
listOfOctavesGuitar = ['great', 'small', 'one-lined', 'two-lined', 'three-lined'];

