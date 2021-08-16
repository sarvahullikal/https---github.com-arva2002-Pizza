import { DeliveryDriver } from "./DeliveryDriver";
import { Pizza } from "./Pizza";

export class DriverManager {
	private drivers: Array<DeliveryDriver> = [];
	private currentDriverNumber: number = 0;

	private getDriver() {
		if (this.currentDriverNumber > this.drivers.length - 1) {
			this.currentDriverNumber = 0;
		}
		return this.drivers[this.currentDriverNumber];
	}

	addDriver(driver: DeliveryDriver) {
		this.drivers.push(driver);
	}

	deliverPizza(pizza: Pizza, direction: string) {
		this.getDriver().dispatch(pizza, direction);
		this.currentDriverNumber++;
	}
}