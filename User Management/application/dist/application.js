"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManagementApplication = void 0;
const tslib_1 = require("tslib");
const boot_1 = require("@loopback/boot");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const service_proxy_1 = require("@loopback/service-proxy");
const rest_explorer_1 = require("@loopback/rest-explorer");
const path_1 = tslib_1.__importDefault(require("path"));
const sequence_1 = require("./sequence");
class UserManagementApplication extends (0, boot_1.BootMixin)((0, service_proxy_1.ServiceMixin)((0, repository_1.RepositoryMixin)(rest_1.RestApplication))) {
    constructor(options = {}) {
        super(options);
        this.sequence(sequence_1.MySequence);
        this.static("/", path_1.default.join(__dirname, "../public"));
        this.configure(rest_explorer_1.RestExplorerBindings.COMPONENT).to({
            path: "/explorer",
        });
        this.component(rest_explorer_1.RestExplorerComponent);
        this.projectRoot = __dirname;
        this.bootOptions = {
            controllers: {
                dirs: ["controllers"],
                extensions: [".controller.js"],
                nested: true,
            },
        };
    }
}
exports.UserManagementApplication = UserManagementApplication;
//# sourceMappingURL=application.js.map