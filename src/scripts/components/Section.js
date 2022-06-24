export class Section {
    constructor({ data, renderer },  containerSelector) {
      this._items = data;
      this._renderer = renderer;
      this._container = document.querySelector(containerSelector);
    }
  
    addItem(data) {
     const element = this._renderer(data);
      this._container.prepend(element);
    }
  
    //clear() {
     // this._container.innerHTML = " ";
    //}
  
    renderItems() {
      //this.clear();
  
      this._renderedItems.forEach(item => {
      this._renderer(item);
      });
    }
  }
  