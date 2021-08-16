import { GridLocation } from "./GridLocation";

export class GridLocationNavigator {
	private gridLocation: GridLocation;

	constructor (gridLocation: GridLocation) {
		this.gridLocation = gridLocation;
	}

	private goNorth() {
		this.gridLocation.north++;
	}

	private goSouth() {
		this.gridLocation.north--;
	}

	private goEast() {
		this.gridLocation.east++;
	}

	private goWest() {
		this.gridLocation.east--;
	}

	navigate(direction: string) {
		if (direction === "<") {
			this.goEast();
		} else if (direction === ">") {
			this.goWest();
		} else if (direction === "^") {
			this.goNorth();
		} else if (direction === "v") {
			this.goSouth();
		}
	}

	getLocation() {
		return this.gridLocation;
	}
}
