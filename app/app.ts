import express, { Application } from "express";
import { config } from "./config";
import routes from "./routes";

export default class App{

  app!: Application;
  
  init(){
    this.app = express();

    this.loadRoutes();

    this.app.listen(config.system.port, () => this.afterInit());
  }

  private afterInit(){
    console.log('Aplicativo iniciado na porta:', config.system.port);
  }

  private loadRoutes(){
    this.app.use(routes);
  }
}