"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const tslib_1 = require("tslib");
const application_1 = require("./application");
tslib_1.__exportStar(require("./application"), exports);
async function main(options = {}) {
    const app = new application_1.UserManagementApplication(options);
    await app.boot();
    await app.start();
    const url = app.restServer.url;
    console.log(`Server is running at ${url}`);
    console.log(`Try ${url}`);
    return app;
}
exports.main = main;
if (require.main === module) {
    const config = {
        rest: {
            port: +((_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000),
            host: process.env.HOST,
            gracePeriodForClose: 5000,
            openApiSpec: {
                setServersFromRequest: true,
            },
        },
    };
    main(config).catch((err) => {
        console.error("Cannot start the application.", err);
        process.exit(1);
    });
}
//# sourceMappingURL=index.js.map