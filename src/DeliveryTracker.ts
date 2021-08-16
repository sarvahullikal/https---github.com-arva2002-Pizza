import { DeliveryDriver } from "./DeliveryDriver";
import { GridLocation } from "./GridLocation";
import { DeliveryStatus, ItemDeliveryStatus } from "./ItemDeliveryStatus";
import { Item } from "./Pizza";

export class DeliveryTracker {
	private itemDeliveryStatusMap = new Map<string, ItemDeliveryStatus[]>()

	private getKey(gridLocation: GridLocation) {
		return `${gridLocation.east}e${gridLocation.north}n`;
	}

	updateDelivered(gridLocation: GridLocation, item: Item, driver: DeliveryDriver) {
		const itemDeliveryStatus = new ItemDeliveryStatus(gridLocation, item, driver, DeliveryStatus.Deliverd);
		const key = this.getKey(gridLocation);

		if (this.itemDeliveryStatusMap.has(key)) {
			this.itemDeliveryStatusMap.get(key)?.push(itemDeliveryStatus);
			return;
		}
		this.itemDeliveryStatusMap.set(key, [itemDeliveryStatus]);
	}

	getNumberOfHomesDelivered() {
		return this.itemDeliveryStatusMap.size;
	}
}