"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let User = class User extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: "string",
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: "string",
        required: true,
        jsonSchema: {
            pattern: "^[A-Z][a-z]+[ ][A-Z][a-z]+$",
        },
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: "string",
        required: true,
        jsonSchema: {
            pattern: "^([a-z0-9]+)@([a-z0-9]+).([a-z]{2,7}).([a-z]{2,7})?$",
        },
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: "string",
        required: true,
        jsonSchema: {
            pattern: "^[6-9][0-9]{9}$",
        },
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: "string",
        required: true,
        jsonSchema: {
            pattern: "((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,21})",
        },
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: "string",
        required: true,
        jsonSchema: {
            pattern: "((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,21})",
        },
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "confirmPassword", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: "date",
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: "date",
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "updatedAt", void 0);
User = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], User);
exports.User = User;
//# sourceMappingURL=user.model.js.map