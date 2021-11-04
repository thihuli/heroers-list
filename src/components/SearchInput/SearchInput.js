import React from 'react';
import './styles.scss';

function SearchInput({ value, onChange, label }) {
  const handleChange = (event) => {
    onChange(event.target.value)
  };

  return (
    <div className='container-input'>
      <input
        type='search'
        value={value}
        onChange={handleChange}
        className='search-input'
        placeholder={label}
      />
    </div>
  );
}

export default SearchInput;