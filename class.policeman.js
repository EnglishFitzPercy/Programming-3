class Policeman extends Base {
    constructor(x, y, index) {
        super(x, y, index);
        this.angle = [0, 4];
    }

    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }

    hunt() {
        var newCell = random(this.chooseCell(4));
        if (newCell && matrix[newCell[1]][newCell[0]] == 4) {

            matrix[newCell[1]][newCell[0]] = 5;
            matrix[this.y][this.x] = 0;
            this.y = newCell[1];
            this.x = newCell[0];

            var newanimalCell = random(this.chooseCell(0));
            var animalorHanimal = random(0, 1);

            if (animalorHanimal >= 0.5) {
                for (var i = 0; i < 2; i++) {
                    var newGrassEater = new GrassEater(newanimalCell[0], newanimalCell[1], this.index);
                    animalArr.push(newGrassEater);
                    matrix[newanimalCell[1]][newanimalCell[0]] = 2;
                }
            }

            else if (animalorHanimal < 0.5) {
                var newGrassEaterEater = new GrassEaterEater(newanimalCell[0], newanimalCell[1], this.index);
                HanimalArr.push(newGrassEaterEater);
                matrix[newanimalCell[1]][newanimalCell[0]] = 3;
            }

            for (var i = 0; i < 10; i++) {

                var k = random(this.angle);
                var m = random(this.angle);

                if (matrix[k][m] == 0) {

                    var newPoacher = new Poacher(m, k, this.index);
                    poacherArr.push(newPoacher);
                    matrix[k][m] = 4;

                    break;
                }
            }
            for (var i in poacherArr) {

                if (newCell[0] == poacherArr[i].x && newCell[1] == poacherArr[i].y) {
                    poacherArr.splice(i, 1);
                    break;

                }
            }

        }
        else {
            this.move();
        }
    }
    
    move() {
        var newCell = random(this.chooseCell(1));
        if (newCell) {
            matrix[newCell[1]][newCell[0]] = 5;
            matrix[this.y][this.x] = 0;
            this.y = newCell[1];
            this.x = newCell[0];
            for (var i in grassArr) {
                if (newCell[0] == grassArr[i].x && newCell[1] == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
        }
        else {
            var newCell = random(this.chooseCell(0));
            if (newCell) {
                matrix[newCell[1]][newCell[0]] = 5;
                matrix[this.y][this.x] = 0;
                this.y = newCell[1];
                this.x = newCell[0];
            }

        }
    }
}