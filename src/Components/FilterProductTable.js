import React from 'react';
import { useState } from 'react';
import './filterproductlist.css';
import { SearchBar } from './SearchBar';

export function FilterProductTable() {
  const [search, setSearch] = useState('');
  return (
    <div className="header">
      <h1 className="nav">Veg Cart</h1>
      <SearchBar search={search} onSearchTextChange={setSearch} />
    </div>
  );
}
