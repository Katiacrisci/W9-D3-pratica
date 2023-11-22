var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Taxes = /** @class */ (function () {
    function Taxes(_grossIncome, _irpef, _inps) {
        this.grossIncome = _grossIncome;
        this.irpef = _irpef;
        this.inps = _inps;
    }
    return Taxes;
}());
var FreeLance = /** @class */ (function (_super) {
    __extends(FreeLance, _super);
    function FreeLance(grossIncome, irpef, inps) {
        return _super.call(this, grossIncome, irpef, inps) || this;
    }
    FreeLance.prototype.getNetTaxes = function () {
        return this.grossIncome * 0.96;
    };
    FreeLance.prototype.getTaxesIrpef = function () {
        return this.getNetTaxes() * this.irpef;
    };
    FreeLance.prototype.getTaxesInps = function () {
        return this.getNetTaxes() * this.inps;
    };
    FreeLance.prototype.getNetIncome = function () {
        return this.getNetTaxes() - this.getTaxesInps() - this.getTaxesIrpef();
    };
    return FreeLance;
}(Taxes));
