import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardList extends Component {
  render() {
    const {
      cardsCreated,
    } = this.props;
    return (
      <div>
        { cardsCreated.map((card) => (
          <section className="container-card" key={ card.cardName }>
            <h4 data-testid="name-card">
              { card.cardName }
            </h4>
            <span data-testid="rare-card">
              { card.cardRare }
            </span>
            <img src={ card.cardImage } alt={ card.cardName } data-testid="image-card" />
            <p data-testid="description-card">
              { card.cardDescription }
            </p>
            <div id="container-attributes">
              <span data-testid="attr1-card">
                { card.cardAttr1 }
              </span>
              <span data-testid="attr2-card">
                { card.cardAttr2 }
              </span>
              <span data-testid="attr3-card">
                { card.cardAttr3 }
              </span>
            </div>
            { card.cardTrunfo && <h5 data-testid="trunfo-card">Super Trunfo</h5> }
          </section>
        ))}
      </div>
    );
  }
}

CardList.propTypes = {
  cardsCreated: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  })).isRequired,
};

export default CardList;
