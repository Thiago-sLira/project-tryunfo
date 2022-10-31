import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      onInputChange, hasTrunfo,
      cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <fieldset>
          <legend><h2>ADICIONE NOVA CARTA</h2></legend>
          <label htmlFor="input-name">
            Nome
            <input
              type="text"
              data-testid="name-input"
              id="input-name"
              placeholder="Digite o nome da carta ..."
              value={ cardName }
              onChange={ onInputChange }
              name="cardName"
            />
          </label>
          <br />
          <br />
          <label htmlFor="textarea-description">
            Descrição
            <textarea
              name="cardDescription"
              id="textarea-description"
              cols="30"
              rows="10"
              data-testid="description-input"
              placeholder="Digite a descrição da carta ..."
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <br />
          <label htmlFor="input-numberAttack">
            Ataque
            <input
              type="number"
              data-testid="attr1-input"
              id="input-numberAttack"
              placeholder="Máximo de 90 pontos"
              value={ cardAttr1 }
              onChange={ onInputChange }
              name="cardAttr1"
            />
          </label>
          <br />
          <br />
          <label htmlFor="input-numberDefense">
            Defesa
            <input
              type="number"
              data-testid="attr2-input"
              id="input-numberDefense"
              placeholder="Máximo de 90 pontos"
              value={ cardAttr2 }
              onChange={ onInputChange }
              name="cardAttr2"
            />
          </label>
          <br />
          <br />
          <label htmlFor="input-numberLife">
            Vida
            <input
              type="number"
              data-testid="attr3-input"
              id="input-numberLife"
              placeholder="Máximo de 90 pontos"
              value={ cardAttr3 }
              onChange={ onInputChange }
              name="cardAttr3"
            />
          </label>
          <br />
          <br />
          <label htmlFor="input-image">
            Imagem
            <input
              type="text"
              data-testid="image-input"
              id="input-image"
              placeholder="Link para imagem"
              value={ cardImage }
              onChange={ onInputChange }
              name="cardImage"
            />
          </label>
          <br />
          <br />
          <label htmlFor="select-rarity">
            Raridade
            <select
              name="cardRare"
              id="select-rarity"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <br />
          <br />
          {
            hasTrunfo
              ? <h4>Você já tem um Super Trunfo em seu baralho</h4>
              : (
                <label htmlFor="input-trunfo">
                  Super Trunfo
                  <input
                    type="checkbox"
                    id="input-trunfo"
                    data-testid="trunfo-input"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                    name="cardTrunfo"
                  />
                </label>
              )
          }
          <br />
          <br />
          <button
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </fieldset>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
