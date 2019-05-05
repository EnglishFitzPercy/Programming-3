class GrassEaterEater extends Base {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 50;
    }

    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }

    mul() {
        var newCell = random(this.chooseCell(0));
        if (newCell) {
            var newGrassEaterEater = new GrassEaterEater(newCell[0], newCell[1], this.index);
            HanimalArr.push(newGrassEaterEater);
            matrix[newCell[1]][newCell[0]] = 3;
            this.energy = 50;
        }
        else{
            var newCell = random(this.chooseCell(1));
            if (newCell) {
                var newGrassEaterEater = new GrassEaterEater(newCell[0], newCell[1], this.index);
                HanimalArr.push(newGrassEaterEater);
                matrix[newCell[1]][newCell[0]] = 3;
                this.energy = 50;
            }

        }
    }

    eat() {
        if (this.energy > 0 && this.energy < 60) {
            var newCell = random(this.chooseCell(2));
            if (newCell && matrix[newCell[1]][newCell[0]] == 2) {
                matrix[newCell[1]][newCell[0]] = 3;
                matrix[this.y][this.x] = 0;
                this.y = newCell[1];
                this.x = newCell[0];
                this.energy = this.energy + 5;

                for (var i in animalArr) {
                    if (newCell[0] == animalArr[i].x && newCell[1] == animalArr[i].y) {
                        animalArr.splice(i, 1);
                        break;
                    }
                }

            }
            else {
                this.move();
            }
        }

        else if (this.energy >= 60) {
            this.mul();
        }
        else if (this.energy <= 0) {
            this.die();
        }
    }

    move() {
        var newCell = random(this.chooseCell(1));
        if (newCell) {
            matrix[newCell[1]][newCell[0]] = 3;

            matrix[this.y][this.x] = 0;
            this.y = newCell[1];
            this.x = newCell[0];
            this.energy--;
            for (var i in grassArr) {
                if (newCell[0] == grassArr[i].x && newCell[1] == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
        } else {
            var newCell = random(this.chooseCell(0));
            matrix[newCell[1]][newCell[0]] = 3;
            matrix[this.y][this.x] = 0;
            this.y = newCell[1];
            this.x = newCell[0];
            this.energy--;

        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in HanimalArr) {
                if (this.x == HanimalArr[i].x && this.y == HanimalArr[i].y) {
                    HanimalArr.splice(i, 1);
                    break;
                }
            }
        }
    }

}