import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { filterName, onInputChange } = this.props;
    return (
      <div>
        <h3>Todas as Cartas</h3>
        Filtros de busca
        <label htmlFor="filter-name">
          <input
            id="filter-name"
            type="text"
            data-testid="name-filter"
            name="filterName"
            value={ filterName }
            onChange={ onInputChange }
          />
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  filterName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Filter;
