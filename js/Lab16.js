(function() {

var app = angular.module("GenerateWordsandPhrases", []);

app.controller("mainController", ['$scope', function ($scope, $interval) {

 var wordList = [
	'Fun', 
	'Tiring', 
	'Sad', 
	'Boring', 
	'Hysterical'
 	];

 var phraseList = [
	"Don't play stupid with me...I'm better at it", 
	"I'm beat, flat, worn out, tired", 
	"Don't cry because it's over, smile because it happened", 
	"It bores me to tears", 
	"He who laughs last, laughs longest"	
 	];

var classList = ["darkblue", "yellow", "fontSize", "background1", "background2", "fontDec"];
var classAnimate = ["bounce", "rubberband", "swing", "tada", "jello", "wobble", "rollIn"];
var allFunctions = [addWord, addPhrase, addDecorWord, addDecorPhrase];

$scope.addAllClass = function () {
	var x = randomFunction();
	x()
 }

$scope.arr = [];
$scope.style1 = classList[Math.floor(Math.random() * classList.length)];
$scope.style3 = classAnimate[Math.floor(Math.random() * classAnimate.length)];

$scope.addWord = function () {
	console.log("addword");
	var newWord = {};
	newWord.text = wordList[Math.floor(Math.random() * wordList.length)];
	$scope.arr.push(newWord);
	};

$scope.addPhrase = function () {
	var newPhrase = {};
	newPhrase.text = phraseList[Math.floor(Math.random() * phraseList.length)];
	$scope.arr.push(newPhrase);
	console.log("Made it phrase");
	};

$scope.addDecorWord = function () {
	var newDecorWord = {};
	newDecorWord.text = wordList[Math.floor(Math.random() * wordList.length)];
	newDecorWord.style1 = classList[Math.floor(Math.random() * classList.length)];
	newDecorWord.style2 = classList[Math.floor(Math.random() * classList.length)];
	newDecorWord.style3 = classAnimate[Math.floor(Math.random() * classAnimate.length)];
	$scope.arr.push(newDecorWord);
	};

$scope.addDecorPhrase = function () {
	var newDecorPhrase = {};
	newDecorPhrase.text = phraseList[Math.floor(Math.random() * phraseList.length)];
	newDecorPhrase.style1 = classList[Math.floor(Math.random() * classList.length)];
	newDecorPhrase.style2 = classList[Math.floor(Math.random() * classList.length)];
	newDecorPhrase.style3 = classAnimate[Math.floor(Math.random() * classAnimate.length)];
	$scope.arr.push(newDecorPhrase);
	};

function randomFunction() {
	return allFunctions[Math.floor(Math.random() * allFunctions.length)];
}

}]);
})();