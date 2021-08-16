"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridLocationNavigator = void 0;
class GridLocationNavigator {
    constructor(gridLocation) {
        this.gridLocation = gridLocation;
    }
    goNorth() {
        this.gridLocation.north++;
    }
    goSouth() {
        this.gridLocation.north--;
    }
    goEast() {
        this.gridLocation.east++;
    }
    goWest() {
        this.gridLocation.east--;
    }
    navigate(direction) {
        if (direction === "<") {
            this.goEast();
        }
        else if (direction === ">") {
            this.goWest();
        }
        else if (direction === "^") {
            this.goNorth();
        }
        else if (direction === "v") {
            this.goSouth();
        }
    }
    getLocation() {
        return this.gridLocation;
    }
}
exports.GridLocationNavigator = GridLocationNavigator;
//# sourceMappingURL=GridLocationNavigator.js.map