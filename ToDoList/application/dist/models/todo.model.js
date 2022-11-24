"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Todo = class Todo extends repository_1.Entity {
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
], Todo.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: "string",
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Todo.prototype, "title", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: "string",
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Todo.prototype, "description", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: "boolean",
        required: true,
    }),
    tslib_1.__metadata("design:type", Boolean)
], Todo.prototype, "isComplete", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: "date",
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Todo.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: "date",
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Todo.prototype, "updatedAt", void 0);
Todo = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Todo);
exports.Todo = Todo;
//# sourceMappingURL=todo.model.js.map