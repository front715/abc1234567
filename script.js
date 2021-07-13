
function generator(matLen, gr, grEat,pr,fr,st) {
    let matrix = [];
    for (let i = 0; i < matLen; i++) {
        matrix[i] = [];
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0;
        }
    }

    console.log(matrix);
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let i = 0; i < pr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3;
        }
    }
    for (let i = 0; i < fr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 4;
        }
    }
    for (let i = 0; i < st; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 5;
        }
    }


    return matrix;
}

let side = 30;

let matrix = generator(20, 20,10,12,12,7);


var grassArr = [];
var grassEaterArr = []
var predatorArr = []
var fireArr = []
var stoneArr = []

function setup() {
    frameRate(7);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr1 = new Grass(x, y);
                grassArr.push(gr1);
            } else if (matrix[y][x] == 2) {
                var gr2 = new GrassEater(x, y);
                grassEaterArr.push(gr2);
            }
            else if (matrix[y][x] == 3) {
                var gr2 = new Preditor(x, y);
                predatorArr.push(gr2)
            }
            else if (matrix[y][x] == 4) {
                var gr2 = new Fire(x, y);
                fireArr.push(gr2)
            }
            else if (matrix[y][x] == 5) {
                var gr2 = new Stone(x, y);
                stoneArr.push(gr2)
            }
        }
    }
}


function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("gray");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("lighblue");
                rect(x * side, y * side, side, side);
            }


        }
    }
    console.log(grassArr.length);
    console.log(grassEaterArr.length);
    console.log(predatorArr.length);
    console.log(fireArr.length);
    console.log(stoneArr.length);
    console.log("----------");
    

    for (var i in grassArr) {
        grassArr[i].mul()
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].mul()
        grassEaterArr[i].eat()
    }
    for (var i in predatorArr) {    
        predatorArr[i].mul()
        predatorArr[i].eat()
    }
    for (var i in fireArr) {    
        fireArr[i].mul()
        fireArr[i].eat()
    }
    for (var i in stoneArr) {    
        stoneArr[i].mul()
        stoneArr[i].die()
    }

}



