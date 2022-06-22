export class Section {
    constructor({ data, renderer },  containerSelector) {
      this._renderedItems = data;
      this._renderer = renderer;
      this._container = document.querySelector(containerSelector);
    }
  
    setItem(data) {
     // const element = this._renderer(data);
      this._container.prepend(data);
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
  