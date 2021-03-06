"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var MillenniumFlacon = /** @class */ (function (_super) {
    __extends(MillenniumFlacon, _super);
    function MillenniumFlacon() {
        var _this = _super.call(this, "hiperdrive") || this;
        _this.cargoContainers = 4;
        return _this;
    }
    MillenniumFlacon.prototype.jumpIntoHiperspace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpIntoHiperspace.call(this);
        }
        else {
            console.log('Failed to jump into hyperspace');
        }
    };
    return MillenniumFlacon;
}(base_ships_1.Spacecraft));
exports.MillenniumFlacon = MillenniumFlacon;
