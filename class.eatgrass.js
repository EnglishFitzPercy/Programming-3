class GrassEater extends Base{
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 8;
    }

    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }

    mul() {
        var newCell = random(this.chooseCell(0));
        if (this.energy == 17 && newCell) {
            var newGrassEater = new GrassEater(newCell[0], newCell[1], this.index);
            animalArr.push(newGrassEater);
            matrix[newCell[1]][newCell[0]] = 2;
            this.energy = 8;
        }
        else {
            var newCell = random(this.chooseCell(1));
            if (this.energy == 17 && newCell) {
                var newGrassEater = new GrassEater(newCell[0], newCell[1], this.index);
                animalArr.push(newGrassEater);
                matrix[newCell[1]][newCell[0]] = 2;
                this.energy = 8;
                for (var i in grassArr) {
                    if (newCell[0] == grassArr[i].x && newCell[1] == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
            }
        }
    }

    eat() {
        if (this.energy > 0 && this.energy < 17) {
            var newCell = random(this.chooseCell(1));
            if (newCell && matrix[newCell[1]][newCell[0]] == 1) {
                matrix[newCell[1]][newCell[0]] = 2;
                matrix[this.y][this.x] = 0;
                this.y = newCell[1];
                this.x = newCell[0];

                this.energy++;

                for (var i in grassArr) {
                    if (newCell[0] == grassArr[i].x && newCell[1] == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }

            }
            else {
                this.move();
            }
        }
        else if (this.energy >= 17) {
            this.mul();
        }
        else if (this.energy <= 0) {
            this.die();
        }
    }

    move() {

        var newCell = random(this.chooseCell(0));
        if (newCell) {
            matrix[newCell[1]][newCell[0]] = 2;
            matrix[this.y][this.x] = 0;
            this.y = newCell[1];
            this.x = newCell[0];
            this.energy--;

        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in animalArr) {
                if (this.x == animalArr[i].x && this.y == animalArr[i].y) {
                    animalArr.splice(i, 1);
                    break;
                }
            }
        }
    }

}