export class Section {
  constructor({ renderer },  containerSelector) {
   // this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  // inserts element to the container
  addItem(item) {
    const element = this._renderer(item)
    this._container.prepend(element)
  };

  // renders initial items
  renderItems(items) {
    items.forEach((data) => {
      this.addItem(data)
    })
  };
}