import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({handleChange, handleSubmit}) {
  return (
    <form
      className="d-flex justify-content-center"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="query"
        placeholder="Search..."
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

SearchBar.propTypes = {
  handleChange : PropTypes.func.isRequired,
  handleSubmit : PropTypes.func.isRequired
};

export default SearchBar;
