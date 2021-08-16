export interface Item {
	name: string;
}

export class Pizza implements Item {
	name: string;
	toppings: any;

	constructor(name: string) {
		this.name = name;
	}
}