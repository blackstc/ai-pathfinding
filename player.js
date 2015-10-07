/////////////////////
// DON'T EDIT THIS //
/////////////////////
var $ = require('jquery');

class Player  {
	constructor (board) {
		this._board = board;
		this._location = this._board.getPlayerStartPosition();
		this._board.visit(this._location);
	}
	move (direction) {
		var successfulMove = false;
		if (direction === 'up') {
			var newLocation = {x:this._location.x, y:this._location.y-1};
			if (this._board.visit(newLocation)) {
				successfulMove = true;
				this._location = newLocation;
			}
		} else if (direction === 'down') {
			var newLocation = {x:this._location.x, y:this._location.y+1};
			if (this._board.visit(newLocation)) {
				successfulMove = true;
				this._location = newLocation;
			}
		} else if (direction === 'left') {
			var newLocation = {x:this._location.x-1, y:this._location.y};
			if (this._board.visit(newLocation)) {
				successfulMove = true;
				this._location = newLocation;
			}
		} else if (direction === 'right') {
			var newLocation = {x:this._location.x+1, y:this._location.y};
			if (this._board.visit(newLocation)) {
				successfulMove = true;
				this._location = newLocation;
			}
		}
		var neighbors = this.explore();
		if (neighbors.here === 'goal') {
			var $win = $('#win');
			$win.empty();
			$win.html('<h1>YOU MADE IT TO THE GOAL!</h1>');
		}
		return successfulMove;
	}
	explore () {
		var cell = this._board.getCell(this._location.x, this._location.y);
		var up = cell.up ? cell.up.getType() : 'out-of-bounds';
		var down = cell.down ? cell.down.getType() : 'out-of-bounds';
		var right = cell.right ? cell.right.getType() : 'out-of-bounds';
		var left = cell.left ? cell.left.getType() : 'out-of-bounds';
		var here = cell.getType();
		return {
			up, down, left, right, here
		}
	}
	getGoalPosition () {
		return this._board.getGoalPosition();
	}
	getPosition () {
		return {x:this._location.x, y:this._location.y};
	}
};

module.exports = Player;
