/////////////////////
// DON'T EDIT THIS //
/////////////////////

var Board = require('./board.js');
var Player = require('./player.js');
var Ai = require('./ai.js');

// BOARD CODEX
// ' ': empty space
// '#': wall space
// '_': player start
// '!': player goal
var board1 = [
	'_    ',
	'     ',
	'     ',
	'     ',
	'    !'
];
var board2 = [
	'!    ',
	'    #',
	'     ',
	'   # ',
	'   #_'
];
var board3 = [
	'_    ',
	' ### ',
	' #   ',
	'#  ##',
	'    !'
];

var board = new Board(board2);
var player = new Player(board);
var ai = new Ai(player);

// run the AI
var frame = setInterval(function () {
	while(ai.tick()) {}
	clearInterval(frame);
}, 500);
