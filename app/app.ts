import express, { Application } from "express";
import { ConnectionOptions, createConnection } from "typeorm";
import { config } from "./config";
import routes from "./routes";

export default class App{

  app!: Application;
  
  async init(){

    await this.beforeInit();

    this.app = express();

    this.loadRoutes();

    this.app.listen(config.system.port, () => this.afterInit());
  }

  private async beforeInit(){
    await createConnection(<ConnectionOptions> config.database);
  }

  private afterInit(){
    console.log('Aplicativo iniciado na porta:', config.system.port);
  }

  private loadRoutes(){
    this.app.use(routes);
  }
}