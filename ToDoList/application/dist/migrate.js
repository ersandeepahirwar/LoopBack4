"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrate = void 0;
const application_1 = require("./application");
async function migrate(args) {
    const existingSchema = args.includes("--rebuild") ? "drop" : "alter";
    console.log("Migrating schemas (%s existing schema)", existingSchema);
    const app = new application_1.ToDoListApplication();
    await app.boot();
    await app.migrateSchema({ existingSchema });
    process.exit(0);
}
exports.migrate = migrate;
migrate(process.argv).catch((err) => {
    console.error("Cannot migrate database schema", err);
    process.exit(1);
});
//# sourceMappingURL=migrate.js.map