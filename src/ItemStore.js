import EventEmitter from 'events';
import uniqueId from 'lodash/uniqueId';

import AppDispatcher from './AppDispatcher';

let items = [
  { value: 'Laptop', id: uniqueId(), packed: false },
  { value: 'Laptop Charger', id: uniqueId(), packed: false },
  { value: 'Notebook', id: uniqueId(), packed: false },
  { value: 'Umbrella', id: uniqueId(), packed: false },
  { value: 'Notebook', id: uniqueId(), packed: false },
  { value: 'Mobile', id: uniqueId(), packed: false },
  { value: 'Mobile Data Cable', id: uniqueId(), packed: false },
  { value: 'Earphones', id: uniqueId(), packed: false },
  { value: 'Bluetooth earphones', id: uniqueId(), packed: false },
  { value: 'Wireless Mouse', id: uniqueId(), packed: false },
  { value: 'Spectacles', id: uniqueId(), packed: false }
];

class ItemStore extends EventEmitter {
  constructor() {
    super();
    AppDispatcher.register(action => {
      if (action.type === 'ADD_NEW_ITEM') {
        return this.addItem(action.item);
      }
      if (action.type === 'UPDATE_ITEM') {
        return this.updateItem(action.item);
      }
      if (action.type === 'REMOVE_ITEM') {
        return this.removeItem(action.item);
      }
    });
  }

  getItems() {
    return items;
  }

  addItem(item) {
    items = [...items, item];
    this.emit('change');
  }

  updateItem(updateItem) {
    items = items.map(item => {
      if (item.id !== updateItem.id) return item;
      return updateItem;
    });
    this.emit('change');
  }

  removeItem(itemToBeRemoved) {
    items = items.filter(item => item.id !== itemToBeRemoved.id);
    this.emit('change');
  }
}

export default new ItemStore();
