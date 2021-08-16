"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemDeliveryStatus = exports.DeliveryStatus = void 0;
var DeliveryStatus;
(function (DeliveryStatus) {
    DeliveryStatus[DeliveryStatus["Deliverd"] = 0] = "Deliverd";
    DeliveryStatus[DeliveryStatus["NotAnswered"] = 1] = "NotAnswered";
})(DeliveryStatus = exports.DeliveryStatus || (exports.DeliveryStatus = {}));
class ItemDeliveryStatus {
    constructor(gridLocation, item, driver, status) {
        this.gridLocation = gridLocation;
        this.item = item;
        this.driver = driver,
            this.status = status;
    }
}
exports.ItemDeliveryStatus = ItemDeliveryStatus;
//# sourceMappingURL=ItemDeliveryStatus.js.map