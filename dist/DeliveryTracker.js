"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryTracker = void 0;
const ItemDeliveryStatus_1 = require("./ItemDeliveryStatus");
class DeliveryTracker {
    constructor() {
        this.itemDeliveryStatusMap = new Map();
    }
    getKey(gridLocation) {
        return `${gridLocation.east}e${gridLocation.north}n`;
    }
    updateDelivered(gridLocation, item, driver) {
        var _a;
        const itemDeliveryStatus = new ItemDeliveryStatus_1.ItemDeliveryStatus(gridLocation, item, driver, ItemDeliveryStatus_1.DeliveryStatus.Deliverd);
        const key = this.getKey(gridLocation);
        if (this.itemDeliveryStatusMap.has(key)) {
            (_a = this.itemDeliveryStatusMap.get(key)) === null || _a === void 0 ? void 0 : _a.push(itemDeliveryStatus);
            return;
        }
        this.itemDeliveryStatusMap.set(key, [itemDeliveryStatus]);
    }
    getNumberOfHomesDelivered() {
        return this.itemDeliveryStatusMap.size;
    }
}
exports.DeliveryTracker = DeliveryTracker;
//# sourceMappingURL=DeliveryTracker.js.map