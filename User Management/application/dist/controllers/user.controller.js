"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UserController = class UserController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(user) {
        return this.userRepository.create(user);
    }
    async find(filter) {
        return this.userRepository.find(filter);
    }
    async findById(id, filter) {
        return this.userRepository.findById(id, filter);
    }
    async replaceById(id, user) {
        await this.userRepository.replaceById(id, user);
    }
    async deleteById(id) {
        await this.userRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)("/users"),
    (0, rest_1.response)(200, {
        description: "User has been created successfully",
        content: { "application/json": { schema: (0, rest_1.getModelSchemaRef)(models_1.User) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            "application/json": {
                schema: (0, rest_1.getModelSchemaRef)(models_1.User, {
                    title: "NewUser",
                    exclude: ["id"],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)("/users"),
    (0, rest_1.response)(200, {
        description: "All users have been found successfully",
        content: {
            "application/json": {
                schema: {
                    type: "array",
                    items: (0, rest_1.getModelSchemaRef)(models_1.User, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.User)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.get)("/users/{id}"),
    (0, rest_1.response)(200, {
        description: "User has been found successfully",
        content: {
            "application/json": {
                schema: (0, rest_1.getModelSchemaRef)(models_1.User, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string("id")),
    tslib_1.__param(1, rest_1.param.filter(models_1.User, { exclude: "where" })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.put)("/users/{id}"),
    (0, rest_1.response)(204, {
        description: "User has been updated successfully",
    }),
    tslib_1.__param(0, rest_1.param.path.string("id")),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.User]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)("/users/{id}"),
    (0, rest_1.response)(204, {
        description: "User has been deleted successfully",
    }),
    tslib_1.__param(0, rest_1.param.path.string("id")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "deleteById", null);
UserController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UserRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UserRepository])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map