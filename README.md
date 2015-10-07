# Pathfinding Workshop

## Objectives

To write a [pathfinding](https://en.wikipedia.org/wiki/Pathfinding) algorithm to get from the player start to goal.
You must navigate through a 2d grid of walls and empty spaces.

## How to Run

Clone this repo.

```sh
$ npm install
$ npm run dev
```

Open `index.html` in a browser.

When you change a js file it will rebuild and the browser will reload.

## What to Edit

`ai.js` is the only file you will edit.
In `ai.js` you can control the player and explore neighboring blocks.

the player has 4 available methods:
* `player.move(direction)`
* `player.explore()`
* `player.getPosition()`
* `player.getGoalPosition()`

Further instructions are given
