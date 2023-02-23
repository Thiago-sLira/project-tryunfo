import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
    } = this.props;
    return (
      <section className="container-preview-card">
        <h2>Pré-Visualização</h2>
        <div className="card">
          <h4 data-testid="name-card" className="name-card">
            { cardName }
          </h4>
          <span data-testid="rare-card" className="rare-card">
            { cardRare }
          </span>
          <img
            src={ cardImage }
            alt={ cardImage ? `Imagem do Card ${cardName}` : '' }
            data-testid="image-card"
            className="image-card"
          />
          <p data-testid="description-card" className="description-card">
            { cardDescription }
          </p>
          <div id="container-attributes">
            <span data-testid="attr1-card" className="attr-card">
              { cardAttr1 }
            </span>
            <span data-testid="attr2-card" className="attr-card">
              { cardAttr2 }
            </span>
            <span data-testid="attr3-card" className="attr-card">
              { cardAttr3 }
            </span>
          </div>
          { cardTrunfo && (
            <h5
              data-testid="trunfo-card"
              className="trunfo-card"
            >
              Super Trunfo
            </h5>
          ) }
        </div>
      </section>
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
