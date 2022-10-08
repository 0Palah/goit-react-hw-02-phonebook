import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ onChangeSearch }) => {
  return (
    <div>
      <label htmlFor="filter">Find contacts by name</label>
      <input type="text" id="filter" onChange={onChangeSearch} />
    </div>
  );
};

Filter.propTypes = {};

export default Filter;
