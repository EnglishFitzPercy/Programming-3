
var matrix = [/*
    [4, 4, 4, 4, 4],
    [4, 0, 0, 0, 4],
    [4, 0, 5, 0, 4],
    [4, 0, 0, 0, 4],
    [4, 4, 4, 4, 4],*/
 ];

for (var i = 0; i < 50; i++) {
    matrix[i] = [];
    for (var j = 0; j < 50; j++) { 
        matrix[i][j] = randomInteger(0, 1);
    }
}
for (var i = 0; i < 5; i ++)
{
    var d = randomInteger(0, 49);
    var b = randomInteger(0, 49);
    matrix[d][b] = 2;
}
for (var i = 0; i < 10; i ++)
{
    var d = randomInteger(0, 49);
    var b = randomInteger(0, 49);
    matrix[d][b] = 3;
}
for (var i = 0; i < 5; i ++)
{
    var d = randomInteger(0, 49);
    var b = randomInteger(0, 49);
    matrix[d][b] = 4;
}
for (var i = 0; i < 5; i ++)
{
    var d = randomInteger(0, 49);
    var b = randomInteger(0, 49);
    matrix[d][b] = 5;
}
var side = 10;


var grassArr = [];
var animalArr = [];
var HanimalArr = [];
var poacherArr = [];
var policeArr = [];
function setup() {
    frameRate(5);
    createCanvas(50 * side + 1, 50 * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y, 1));

            }
            if (matrix[y][x] == 2) {
                animalArr.push(new GrassEater(x, y, 2))
            }
            if (matrix[y][x] == 3) {
                HanimalArr.push(new GrassEaterEater(x, y, 3))
            }
            if (matrix[y][x] == 4) {
                poacherArr.push(new Poacher(x, y, 4))
            }
            if (matrix[y][x] == 5) {
                policeArr.push(new Policeman(x, y, 5))
            }
        }
    }
    console.log(grassArr);
    console.log(animalArr);
    console.log(HanimalArr);
    console.log(poacherArr);
    console.log(policeArr);
}



function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("orange");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
        }
    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }

    for (var i in animalArr) {
        animalArr[i].eat();
    }
    for (var i in HanimalArr) {
        HanimalArr[i].eat();
    }
    for (var i in poacherArr) {
        poacherArr[i].hunt();
    }
    for (var i in policeArr) {
        policeArr[i].hunt();
    }
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }

