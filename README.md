# Welcome to 1603 - A Turing Versioned 2048


This project was done by [Ilana Corson](https://github.com/icorson3) and [Charlie Kaminer](https://github.com/ckaminer) as our GameTime project at Turing School.  In our last module at Turing we switch gears from Ruby and Rails and start digging into JavaScript.  This game is a written in JavaScript and was written in two weeks after one formal week of JS training.

## The Game:

- [Play The Game Here](https://icorson3.github.io/1603-gametime/)

## How to play:

- The game starts with two tiles, each has a value and is randomly placed.
- By using the arrow keys, a user will try to collide tiles together.
- When two tiles of the same value collide, they become one tile of double the value.
- Each time that an arrow is pressed, a new tile is created.
- The game ends when either all the tiles are full and no more moves can be made, or the game is played until one tile becomes "2048".

## Technical Challenges:
First and foremost, we were both very new to JavaScript.  Our only previous project in JS was to turn an old rails app into a single page app, working mostly with jQuery and AJAX.  This was our first experience building an application written entirely in JavaScript.  

##### Under the Hood
After getting over the initial hump of diving into a new language, our biggest challenge was implementing the transfer of data that you see on the screen every time you press an arrow key.  After a few classes on data structures we were feeling inspired to try to implement them into our game.  Our idea was to make the entire data transfer process and its associated logic part of a grid of inter-locking linked lists.  Instead of having tiles move around the board and carry data, we decided to make a grid of 16 stagnant nodes that are each part of four different linked lists, going in each direction.  As such, each time a new game is started, a new grid is created with a total of 16 nodes and 16 lists.  The tiles that you see on the screen only know what node they are currently "hovering" over and then proceed to display that data.  The nodes in the lists themselves are never "moving" but rather just pass data to each other.  Coming from Ruby, this was really nice as it made all of the logic very granular and testable.  Once we got our structures taken care of, we were very confident developing the rest of the game.

##### Tile Animations
It was a lot of fun developing this under-the-hood data structure to use for all of our heavy lifting.  However it did provide us with some additional challenges along the way.  As stated above, our tiles that you see on the screen know nothing other than what node they are currently hovering over.  Each move, the tiles are cleared out and replaced with new tiles based on the data in all of the nodes.  As such, tiles carry no knowledge of past locations.  This made doing any tile animations rather difficult.  We have not implemented animations yet and hope to revisit it in the coming weeks.

##### Using the HTML5 Canvas
As a way to get acquainted with new technologies, we decided to use the HTML5 Canvas for our front end.  This went pretty smooth for what we have right now.  Our goal that we plan to continue pursuing is to use pictures on our tiles instead of numbers and colors.  When we started digging into this challenge we had a lot of difficulty making the canvas play nice in terms of image locations (within the canvas) and sizes.  The alternative solution here would be to use something other than the canvas, such as a grid of div tags.  This would allow us to use img tags more easily and have more freedom to manipulate sizes and locations.  Ideally we would like to figure out how we can make this happen with the canvas.

## 1603 - Starter Kit:
##### To run this game locally, follow these steps:
<br>
To clone the repo:

```
git clone https://github.com/icorson3/1603-gametime
cd 1603-gametime
```

To install the dependencies:

```
npm install
```

To fire up a development server:

```
npm start
```

Once the server is running, you can visit:

* `http://localhost:8080/webpack-dev-server/` to run your version of the game.
* `http://localhost:8080/webpack-dev-server/test.html` to run the test suite in the browser.

To build the static files:

```js
npm run build
```


To run tests in Node:

```js
npm test
```
