export class Section {
    constructor({ item, renderer },  containerSelector) {
      this._items = item;
      this._renderer = renderer;
      this._container = document.querySelector(containerSelector);
    }

    addItem(data) {
      const element = this._renderer(data);
       this._container.prepend(element);
     }

    renderItems() {
      //this.clear();
  
      this._items.forEach(item => {
      this.renderer(item);
      });
    }
  
}
  
    //clear() {
     // this._container.innerHTML = " ";
    //}
  
    
 
  