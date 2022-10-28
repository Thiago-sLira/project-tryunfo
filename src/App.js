import React from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';
import Filter from './components/Filter';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    hasTrunfo: false,
    cardsCreated: [],
    filterName: '',
  };

  nameFilter = () => {
    const { cardsCreated, filterName } = this.state;
    const filter = cardsCreated.filter((card) => card.cardName.includes(filterName));
    this.setState({ cardsCreated: filter });
  };

  enableButton = () => {
    const {
      cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare,
    } = this.state;

    const total = 211;
    const maxNumber = 91;
    const attr = (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) < total
    && (Number(cardAttr1) >= 0 && Number(cardAttr1) < maxNumber)
    && (Number(cardAttr2) >= 0 && Number(cardAttr2) < maxNumber)
    && (Number(cardAttr3) >= 0 && Number(cardAttr3) < maxNumber);

    const verifyLengthInputs = cardName.length > 0
    && cardDescription.length > 0
    && cardImage.length > 0
    && cardRare.length > 0;

    if (attr && verifyLengthInputs) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.enableButton);
    this.nameFilter();
  };

  disableTrunfo = () => {
    const { cardsCreated } = this.state;
    const some = cardsCreated.some(({ cardTrunfo }) => cardTrunfo === true);
    if (some) {
      this.setState({ hasTrunfo: true });
    } else {
      this.setState({ hasTrunfo: false });
    }
  };

  onSaveButtonClick = () => {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
    } = this.state;

    const savedItems = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((prevState) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      isSaveButtonDisabled: true,
      cardsCreated: [...prevState.cardsCreated, savedItems],
    }), this.disableTrunfo);
  };

  deleteCard = (indexCard) => {
    const { cardsCreated } = this.state;
    const newCardsCreated = cardsCreated.filter((_el, index) => index !== indexCard);
    this.setState({ cardsCreated: newCardsCreated }, this.disableTrunfo);
  };

  render() {
    const {
      cardName, cardDescription, cardsCreated, filterName,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, hasTrunfo,
    } = this.state;
    return (
      <div>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          hasTrunfo={ hasTrunfo }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <div>
          <Filter
            filterName={ filterName }
            onInputChange={ this.onInputChange }
          />
          <CardList
            cardsCreated={ cardsCreated }
            deleteCard={ this.deleteCard }
          />
        </div>
      </div>
    );
  }
}

export default App;
