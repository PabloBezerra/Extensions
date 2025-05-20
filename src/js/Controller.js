import { view, server } from "./index.js";

export class Controller {
  constructor() {
    this.currentData = []
    this.lastActived = 'all';
  }

  init() {
    this.updateData(true);
    view.activeNav(this.lastActived);
  }
  
  filterExtensions(dom){
    this.currentData = server.filter(dom)
    this.updateData();
    view.activeNav(dom)
    this.lastActived = dom;
  }

  editExtensions(dom){
    if(dom.tagName === 'BUTTON'){
      server.remove(dom.parentElement.parentElement.id)
      this.filterExtensions(this.lastActived);
    }
    if(dom.tagName === 'INPUT'){
      server.actived(dom.parentElement.parentElement.id);
    }
  }

  updateData(upServer = false){
    if(upServer) this.currentData = server.getData();
    view.clear();
    view.print(this.currentData)
  }

  switchTheme(){
    view.switchTheme();
  }
}