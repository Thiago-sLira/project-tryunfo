import React, { Component } from 'react';

class Form extends Component {
  render() {
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
            />
          </label>
          <br />
          <br />
          <label htmlFor="description-textarea">
            Descrição
            <textarea
              name="description"
              id="description-input"
              cols="30"
              rows="10"
              data-testid="description-input"
              placeholder="Digite a descrição da carta ..."
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
              placeholder="Digite o valor do ataque"
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
              placeholder="Digite o valor da defesa"
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
              placeholder="Digite o valor da vida"
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
            />
          </label>
          <br />
          <br />
          <label htmlFor="select-rarity">
            Raridade
            <select name="rarity" id="select-rarity" data-testid="rare-input">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <br />
          <br />
          <label htmlFor="input-trunfo">
            Super Trunfo
            <input type="checkbox" data-testid="trunfo-input" />
          </label>
          <br />
          <br />
          <button type="button" data-testid="save-button">Salvar</button>
        </fieldset>
      </form>
    );
  }
}

export default Form;
