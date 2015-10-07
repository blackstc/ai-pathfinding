/////////////////////
// DON'T EDIT THIS //
/////////////////////

var $ = require('jquery');

class Cell {
	constructor (x, y) {
		//positional
		this.x = x;
		this.y = y;
		this.up = null;
		this.down = null;
		this.left = null;
		this.right = null;
		//modifiers
		this.visited = false;
		this.start = false;
		this.goal = false;
		this.wall = false;
	}
	render () {
		var $cell = $('<span class="cell"></span>');
		if (this.visited) {
			$cell.addClass('cell--visited');
		}
		if (this.visiting) {
			$cell.addClass('cell--visiting');
		}
		if (this.start) {
			$cell.addClass('cell--start');
		}
		if (this.goal) {
			$cell.addClass('cell--goal');
		}
		if (this.wall) {
			$cell.addClass('cell--wall');
		}
		return $cell;
	}
	visit () {
		this.visiting = true;
		this.visited = true;
	}
	isGoal () {
		return this.goal;
	}
	getType () {
		if (this.wall) {
			return 'wall';
		}
		if (this.goal) {
			return 'goal';
		}
		if (this.start) {
			return 'start'
		}
		return 'empty';
	}
}

class Board {
	constructor (inputBoard) {
		this._board = {};
		this.parseBoard(inputBoard);
		this.drawBoard();
	}
	parseBoard (inputBoard) {
		this._board = {};
		inputBoard.forEach(function (row, y) {
			row.split('').forEach(function (cellCode, x) {
				var cell = new Cell(x, y);
				this._board[x+','+y] = cell;
				if (cellCode === '_') {
					cell.start = true;
				}
				if (cellCode === '#') {
					cell.wall = true;
				}
				if (cellCode === '!') {
					cell.goal = true;
				}
			}, this);
		}, this);
		Object.keys(this._board).forEach(function (key) {
			var cell = this._board[key];
			cell.up = this.getCell(cell.x, cell.y-1);
			cell.down = this.getCell(cell.x, cell.y+1);
			cell.left = this.getCell(cell.x-1, cell.y);
			cell.right = this.getCell(cell.x+1, cell.y);
		}, this);
	}
	drawBoard () {
		var $board = $('#board');
		$board.empty();
		Object.keys(this._board).forEach(function (key) {
			var cell = this._board[key];
			$board.append(cell.render());
		}, this);
	}
	getPlayerStartPosition () {
		var startPosition = {x:0, y:0};
		Object.keys(this._board).forEach(function (key) {
			var cell = this._board[key];
			if (cell.start) {
				startPosition = {x:cell.x, y:cell.y};
			}
		}, this);
		return startPosition;
	}
	getGoalPosition () {
		var goalPosition = {x:0, y:0};
		Object.keys(this._board).forEach(function (key) {
			var cell = this._board[key];
			if (cell.goal) {
				goalPosition = {x:cell.x, y:cell.y};
			}
		}, this);
		return goalPosition;
	}
	getCell (x, y) {
		return this._board[x+','+y];
	}
	visit (location) {
		Object.keys(this._board).forEach(function (key) {
			var cell = this._board[key];
			cell.visiting = false;
		}, this);
		var cell = this.getCell(location.x, location.y);
		if (!cell) {
			return false;
		}
		if (cell.wall) {
			return false;
		}
		cell.visit();
		this.drawBoard();
		return true;
	}
}

module.exports = Board;
