import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import NewItem from './NewItem';
import Items from './Items';

import './Application.css';

const defaultState = [
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

class Application extends Component {
  state = {
    items: defaultState
  };

  addItem = item => {
    this.setState({
      items: [item, ...this.state.items]
    });
  };

  removeItem = itemToBeRemoved => {
    this.setState({ items: this.state.items.filter(item => item.id !== itemToBeRemoved.id) });
  };

  toggleItem = itemToBeToggled => {
    const items = this.state.items.map(item => {
      if (item.id !== itemToBeToggled.id) return item;
      return { ...itemToBeToggled, packed: !itemToBeToggled.packed };
    });
    this.setState({ items });
  };

  markAllAsUnpacked = () => {
    const items = this.state.items.map(item => {
      return { ...item, packed: false };
    });
    this.setState({ items });
  };

  render() {
    const { items } = this.state;
    const packedItems = items.filter(item => item.packed);
    const unpackedItems = items.filter(item => !item.packed);

    return (
      <div className="Application">
        <NewItem addItem={this.addItem} />

        <Items
          title="Unpacked Items"
          items={unpackedItems}
          removeItem={this.removeItem}
          toggleItem={this.toggleItem}
        />
        <Items
          title="Packed Items"
          items={packedItems}
          removeItem={this.removeItem}
          toggleItem={this.toggleItem}
        />
        <button className="button full-width" onClick={this.markAllAsUnpacked}>
          Mark All As Unpacked
        </button>
      </div>
    );
  }
}

export default Application;
