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
    if(dom.id === 'search'||dom.id === 'close') {
      view.addRemoveClass(dom.parentElement, 'search')
      this.filterExtensions(this.lastActived);
      return;
    }
    if(dom.id !== 'search-input') {
      this.currentData = server.filter(dom.id)
      this.updateData();
      view.activeNav(dom.id)
      this.lastActived = dom;
    }
  }

  editExtensions(dom){
    if(dom.tagName === 'BUTTON'){
      server.remove(dom.parentElement.parentElement.id)
      this.filterExtensions(this.lastActived.id);
    }
    if(dom.tagName === 'INPUT'){
      server.actived(dom.parentElement.parentElement.id);
    }
  }

  search(msn){
    if(msn.length !== 0){ 
      this.currentData = server.filter('search', msn.toLowerCase());
      this.updateData();
    }
  }

  updateData(upServer = false){
    if(upServer) this.currentData = server.getData();
    view.clear();
    view.print(this.currentData)
  }

  switchTheme(dom1, dom2){
    view.addRemoveClass(dom1, 'light-theme');
    view.addRemoveClass(dom2, 'light-theme');
  }
}