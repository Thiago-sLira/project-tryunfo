import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { filterName, onInputFilterChange, filterRarity } = this.props;
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
            onChange={ onInputFilterChange }
          />
        </label>
        <label htmlFor="filter-rarity">
          <select
            name="filterRarity"
            id="filter-rarity"
            data-testid="rare-filter"
            value={ filterRarity }
            onChange={ onInputFilterChange }
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  filterName: PropTypes.string.isRequired,
  onInputFilterChange: PropTypes.func.isRequired,
  filterRarity: PropTypes.string.isRequired,
};

export default Filter;
