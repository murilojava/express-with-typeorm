import express from "express";
import { config } from "./config";

export default class App{

  init(){
    const app = express();


    app.listen(config.system.port, () => this.afterInit());
  }

  private afterInit(){
    console.log('Aplicativo iniciado na porta:', config.system.port);
  }
}