export class Section {
  constructor({ items, renderer },  containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  // inserts element to the container
  addItem(data) {
    const element = this._renderer(data)
    this._container.prepend(element)
  };

  // renders initial items
  renderItems() {
    this._items.forEach((data) => {
      this.addItem(data)
    })
  };
}