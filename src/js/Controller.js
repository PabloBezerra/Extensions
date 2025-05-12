import { view, server } from "./index.js";

export class Controller {
    constructor() {
    }
  
    init() {
      server.getData()
    }
  }