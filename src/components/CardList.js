import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardList extends Component {
  render() {
    const {
      cardsList, deleteCard,
    } = this.props;
    return (
      <section>
        { cardsList.map((el) => (
          <div key={ el.cardName } className="container-card">
            <div className="card-created">
              <h4 data-testid="name-card">
                { el.cardName }
              </h4>
              <span data-testid="rare-card">
                { el.cardRare }
              </span>
              <img src={ el.cardImage } alt={ el.cardName } data-testid="image-card" />
              <p data-testid="description-card">
                { el.cardDescription }
              </p>
              <div id="container-attributes">
                <span data-testid="attr1-card">
                  { el.cardAttr1 }
                </span>
                <span data-testid="attr2-card">
                  { el.cardAttr2 }
                </span>
                <span data-testid="attr3-card">
                  { el.cardAttr3 }
                </span>
              </div>
              { el.cardTrunfo && <h5 data-testid="trunfo-card">Super Trunfo</h5> }
            </div>
            <button
              type="button"
              data-testid="delete-button"
              onClick={ () => deleteCard(el.cardName) }
            >
              Excluir
            </button>
          </div>
        ))}
      </section>
    );
  }
}

CardList.propTypes = {
  deleteCard: PropTypes.func.isRequired,
  cardsList: PropTypes.arrayOf(PropTypes.shape({
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
