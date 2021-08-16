"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverManager = void 0;
class DriverManager {
    constructor() {
        this.drivers = [];
        this.currentDriverNumber = 0;
    }
    getDriver() {
        if (this.currentDriverNumber > this.drivers.length - 1) {
            this.currentDriverNumber = 0;
        }
        return this.drivers[this.currentDriverNumber];
    }
    addDriver(driver) {
        this.drivers.push(driver);
    }
    deliverPizza(pizza, direction) {
        this.getDriver().dispatch(pizza, direction);
        this.currentDriverNumber++;
    }
}
exports.DriverManager = DriverManager;
//# sourceMappingURL=DriverManager.js.map