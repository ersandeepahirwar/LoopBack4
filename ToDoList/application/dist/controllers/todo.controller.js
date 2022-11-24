"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TodoController = class TodoController {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }
    async create(todo) {
        return this.todoRepository.create(todo);
    }
    async find(filter) {
        return this.todoRepository.find(filter);
    }
    async findById(id, filter) {
        return this.todoRepository.findById(id, filter);
    }
    async replaceById(id, todo) {
        await this.todoRepository.replaceById(id, todo);
    }
    async deleteById(id) {
        await this.todoRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)("/todos"),
    (0, rest_1.response)(200, {
        description: "Todo has been created successfully",
        content: { "application/json": { schema: (0, rest_1.getModelSchemaRef)(models_1.Todo) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            "application/json": {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Todo, {
                    title: "NewTodo",
                    exclude: ["id"],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)("/todos"),
    (0, rest_1.response)(200, {
        description: "All Todos have been found successfully",
        content: {
            "application/json": {
                schema: {
                    type: "array",
                    items: (0, rest_1.getModelSchemaRef)(models_1.Todo, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Todo)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.get)("/todos/{id}"),
    (0, rest_1.response)(200, {
        description: "Todo has been found successfully",
        content: {
            "application/json": {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Todo, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string("id")),
    tslib_1.__param(1, rest_1.param.filter(models_1.Todo, { exclude: "where" })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.put)("/todos/{id}"),
    (0, rest_1.response)(204, {
        description: "Todo has been updated successfully",
    }),
    tslib_1.__param(0, rest_1.param.path.string("id")),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Todo]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)("/todos/{id}"),
    (0, rest_1.response)(204, {
        description: "Todo has been deleted successfully",
    }),
    tslib_1.__param(0, rest_1.param.path.string("id")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoController.prototype, "deleteById", null);
TodoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.TodoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TodoRepository])
], TodoController);
exports.TodoController = TodoController;
//# sourceMappingURL=todo.controller.js.map