import { view, server } from "./index.js";

export class Controller {
  constructor() {
    this.currentData = [] // current data to be displayed
    this.lastActived = 'all';// last active filter
  }

  // initialize the application
  init() {
    this.updateData(true);
    view.activeNav(this.lastActived);
  }
  
  //Manages the display of extensions, activating search or applying filters such as "all", "active" or "inactive" in the interface.
  filterExtensions(dom){ 
    if(dom.id === 'search'||dom.id === 'close') {
      view.addRemoveClass(dom.parentElement, 'search')
      dom.id === 'search'? dom.nextElementSibling.focus(): '';
      this.filterExtensions(this.lastActived);
      return;
    }
    typeof(dom) !== "string" ? dom = dom.id : dom;
    const options = ['all', 'active', 'inactive']
    if(options.includes(dom)){
      this.currentData = server.filter(dom)
      this.updateData();
      view.activeNav(dom)
      this.lastActived = dom;
    }
  }

  //Commands the editing of the extension, removing or activating it
  editExtensions(dom){
    if(dom.tagName === 'BUTTON'){
      server.rename(dom.parentElement.parentElement.id)
      this.filterExtensions(this.lastActived);
    }
    if(dom.tagName === 'INPUT'){
      server.actived(dom.parentElement.parentElement.id);
    }
  }

  // Receives the input commands the search for extensions
  search(msn){ 
    if(msn.length !== 0){ 
      this.currentData = server.filter('search', msn.toLowerCase());
      this.updateData();
    }
  }

  // Updates the current data and refreshes the view, optionally fetching new data from the server.
  updateData(upServer = false){
    if(upServer) this.currentData = server.getData();
    view.clear();
    view.print(this.currentData)
  }

  // Switches the theme of the application by adding or removing a class from the specified DOM elements.
  switchTheme(dom1, dom2){
    console.log(dom1, dom2);
    view.addRemoveClass(dom1,'light-theme');
    view.addRemoveClass(dom2,'light-theme');
  }
}