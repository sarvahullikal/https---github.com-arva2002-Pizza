import { DeliveryTracker } from "./DeliveryTracker";
import { GridLocation } from "./GridLocation";
import { GridLocationNavigator } from "./GridLocationNavigator";
import { Item } from "./Pizza";

export class DeliveryDriver {
	private name: string;
	private gridLocationNavigator: GridLocationNavigator;
	private deliveryTracker: DeliveryTracker;

	private deliverItem(item: Item) {
		this.deliveryTracker.updateDelivered(<GridLocation>{east: this.gridLocationNavigator.getLocation().east, north: this.gridLocationNavigator.getLocation().north}, item, this);
	}

	constructor(name: string, deliveryTracker: DeliveryTracker) {
		this.name = name;
		this.gridLocationNavigator = new GridLocationNavigator(<GridLocation>{east:0, north: 0});
		this.deliveryTracker = deliveryTracker;
	}

	dispatch(item: Item, direction: string) {
		this.gridLocationNavigator.navigate(direction);
		this.deliverItem(item);
	}
}