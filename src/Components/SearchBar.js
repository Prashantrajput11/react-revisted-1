import React from 'react';
import './searchbar.css';

import filterData from '../../Utils/utils';

export function SearchBar({ search, onSearchTextChange }) {
  const fruits = [
    { name: 'apple', price: 30, inStock: true },
    { name: 'banana', price: 60, inStock: false },
    { name: 'guava', price: 80, inStock: true },
    { name: 'pineapple', price: 130, inStock: false },
    { name: 'strawberry', price: 320, inStock: true },
  ];

  function onSearchHandler(e) {
    onSearchTextChange(e.target.value);
  }
  return (
    <>
      <input
        type="text"
        placeholder="search..."
        onChange={onSearchHandler}
      ></input>

      {/* If search is empty show whole list of fruits else show the searched fruit */}

      {fruits
        .filter((fruit) => {
          if (search == '') {
            return fruit;
          } else if (fruit.name.includes(search)) {
            return fruit.name;
          }
        })
        .map((fruit) => {
          return <li>{fruit.name}</li>;
        })}
    </>
  );
}
