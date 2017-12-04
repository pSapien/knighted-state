import React, { Component } from 'react';

import ItemStore from '../ItemStore';
import NewItem from './NewItem';
import Items from './Items';

import './Application.css';

class Application extends Component {
  state = {
    items: ItemStore.getItems()
  };

  updateItems = () => {
    this.setState({ items: ItemStore.getItems() });
  };

  componentDidMount() {
    ItemStore.on('change', this.updateItems);
  }

  componentWillUnmount() {
    ItemStore.off('change', this.updateItems);
  }

  render() {
    const { items } = this.state;
    const packedItems = items.filter(item => item.packed);
    const unpackedItems = items.filter(item => !item.packed);

    return (
      <div className="Application">
        <NewItem />
        <Items title="Unpacked Items" items={unpackedItems} />
        <Items title="Packed Items" items={packedItems} />
        <button className="button full-width" onClick={this.markAllAsUnpacked}>
          Mark All As Unpacked
        </button>
      </div>
    );
  }
}

export default Application;
