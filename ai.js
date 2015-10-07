//
// You are not allowed to use any other methods
// or properties on this.player than the ones
// defined in these commens
//
// this.player.move(direction)
// this.player.explore()
// this.player.getPosition()
// this.player.getGoalPosition()
//
// Move the player using:
// this.player.move('up');
// this.player.move('down');
// this.player.move('left');
// this.player.move('right');
//		=> true if move was successfull
//
// And explore the neighboring cells using:
// this.player.explore()
//		=> {
//				left: 'wall',
//				right: 'out-of-bounds',
//				up: 'start',
//				down: 'goal',
//				here: 'empty'
//			}
//
//
// Get the current position using:
// this.player.getPosition()
//		=> {x:0, y:0}
//
// Get the goal position using:
// this.player.getGoalPosition()
//		=> {x:0, y:0}
//

class Ai {
	constructor (player) {
		this.player = player;
	}
	tick () {
		//This method is repeated once every second.
		this.player.move('down');
	}
}

module.exports = Ai;
