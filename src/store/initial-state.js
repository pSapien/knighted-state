import uniqueId from 'lodash/uniqueId';

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

export default {
  items,
  filter: {
    packedItemsFilter: '',
    unpackedItemsFilter: ''
  },
  newItemValue: ''
};
