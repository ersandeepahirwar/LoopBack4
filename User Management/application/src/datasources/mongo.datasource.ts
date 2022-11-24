import { inject, lifeCycleObserver, LifeCycleObserver } from "@loopback/core";

import { juggler } from "@loopback/repository";

const config = {
  name: "mongo",
  connector: "mongodb",
  url: "mongodb://localhost:27017/user-management",
  host: "localhost",
  port: 27017,
  user: "",
  password: "",
  database: "user-management",
  useNewUrlParser: true,
};

@lifeCycleObserver("datasource")
export class MongoDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = "mongo";
  static readonly defaultConfig = config;

  constructor(
    @inject("datasources.config.mongo", { optional: true })
    dsConfig: object = config
  ) {
    super(dsConfig);
  }
}
