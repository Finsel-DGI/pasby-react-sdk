"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasbyNationalObject = void 0;
const class_transformer_1 = require("class-transformer");
/**
 * A national uses pasby to communicate with services with just a click of a button.
 *
 * This class governs the sever return object
 */
class PasbyNationalObject {
    constructor() {
        /* eslint new-cap: ["error", { "capIsNew": false }]*/
        this.user = ""; // uses the format org_{id}
    }
    /**
     * Change record to this class
     *
     * @param {Record<string, unknown>} obj  json object from db
     * @return {PasbyNationalObject} this class
     */
    static fromJson(obj) {
        const result = (0, class_transformer_1.plainToInstance)(PasbyNationalObject, obj, { excludeExtraneousValues: true });
        return result;
    }
    /**
     * This class handler to json
     * @return {string} text
     */
    toJsonString() {
        return JSON.stringify(this);
    }
    /**
     * Check if of this class type
     * @param {Object} error the object
     * @returns {boolean} returns true or false
     */
    static isOfInstance(error) {
        return error instanceof PasbyNationalObject;
    }
    /**
    * get document in map format
    * @return { Record<string, unknown>} returns doc map .
    */
    toMap() {
        const res = JSON.parse(this.toJsonString());
        return res;
    }
}
__decorate([
    (0, class_transformer_1.Expose)()
], PasbyNationalObject.prototype, "user", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], PasbyNationalObject.prototype, "address", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], PasbyNationalObject.prototype, "bio", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], PasbyNationalObject.prototype, "contact", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], PasbyNationalObject.prototype, "financial", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], PasbyNationalObject.prototype, "naming", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], PasbyNationalObject.prototype, "Nationality", void 0);
exports.PasbyNationalObject = PasbyNationalObject;
//# sourceMappingURL=pasby:national.js.map