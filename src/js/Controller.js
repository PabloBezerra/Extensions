import { view, server } from "./index.js";

export class Controller {
  constructor() {
    this.data = []
  }

  init() {
    this.data = server.getData()
    view.print(this.data)
  }
  
  filter(dom){
    this.data = server.filter(dom)
    view.clear();
    view.print(this.data)
  }
}