import { DeliveryTracker } from "./DeliveryTracker";
import { DeliveryDriver } from "./DeliveryDriver";
import { DriverManager } from "./DriverManager";
import * as _ from "lodash";

export class Dispatcher {
	private name: string;
	private driverManager: DriverManager;

	constructor(name: string, driverManager: DriverManager) {
		this.name = name;
		this.driverManager = driverManager;
	}	

	dispatchPizza(directions: string) {
		this.driverManager.deliverPizza({name: "hand tossed", toppings: ""}, "");
		_.each(directions, (direction) => {
			this.driverManager.deliverPizza({name: "hand tossed", toppings: ""}, direction);
		});
	}
}