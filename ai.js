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
	getPrevious (moves) {
		var last = moves.length - 1;
		console.log(last);
		return moves[last];
	}
	tick () {
		//This method is repeated once every second.
		// this.player.move('down');
		// this.player.move('right');
		var goal = this.player.getGoalPosition();
		var position = this.player.getPosition();
		var explore = this.player.explore();
		var previous = this.getPrevious();
		var moves = []
		debugger;

		if (goal.x > position.x && explore.right === "empty" && previous !== "left") {
			this.player.move('right');
			moves.push('right')
		} else if (goal.y > position.y && explore.down === "empty") {
			this.player.move("down");
			moves.push('down')
		} else if (goal.y > position.y && explore.down === "wall") {
			this.player.move("left");
			moves.push("left");
		}

		// console.log(this.player.explore());
		// console.log(this.player.getGoalPosition().x);
		console.log(this.player.explore());
	}


}

module.exports = Ai;
