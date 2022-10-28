import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
    } = this.props;
    return (
      <div>
        <section className="container-show-card">
          <h4 data-testid="name-card">
            { cardName }
          </h4>
          <span data-testid="rare-card">
            { cardRare }
          </span>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          <p data-testid="description-card">
            { cardDescription }
          </p>
          <div id="container-attributes">
            <span data-testid="attr1-card">
              { cardAttr1 }
            </span>
            <span data-testid="attr2-card">
              { cardAttr2 }
            </span>
            <span data-testid="attr3-card">
              { cardAttr3 }
            </span>
          </div>
          { cardTrunfo && <h5 data-testid="trunfo-card">Super Trunfo</h5> }
        </section>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
