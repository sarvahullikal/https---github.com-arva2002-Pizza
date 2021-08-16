import { DeliveryDriver } from "./DeliveryDriver";
import { GridLocation } from "./GridLocation";
import { Item } from "./Pizza";

export enum DeliveryStatus{
	Deliverd,
	NotAnswered	
}

export class ItemDeliveryStatus {
	private item: Item;
	private driver: DeliveryDriver;
	private status: DeliveryStatus;
	private gridLocation: GridLocation;

	constructor(gridLocation: GridLocation, item: Item, driver: DeliveryDriver, status: DeliveryStatus) {
		this.gridLocation = gridLocation;
		this.item = item;
		this.driver = driver,
		this.status = status;
	}
}