"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Driver = void 0;
const GridLocationNavigator_1 = require("./GridLocationNavigator");
class Driver {
    constructor(name, deliveryTracker) {
        this.name = name;
        this.gridLocationNavigator = new GridLocationNavigator_1.GridLocationNavigator({ east: 0, north: 0 });
        this.deliveryTracker = deliveryTracker;
    }
    deliverItem(item) {
        this.deliveryTracker.updateDelivered({ east: this.gridLocationNavigator.getLocation().east, north: this.gridLocationNavigator.getLocation().north }, item, this);
    }
    dispatch(item, direction) {
        this.gridLocationNavigator.navigate(direction);
        this.deliverItem(item);
    }
}
exports.Driver = Driver;
//# sourceMappingURL=Driver.js.map