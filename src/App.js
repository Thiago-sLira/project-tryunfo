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
    cardsList: [],
    filterName: '',
    filterRarity: 'todas',
    filterTrunfo: false,
    isFilterNameDisabled: false,
    isFilterRarityDisabled: false,
  };

  filterInputs = () => {
    const { cardsCreated, filterName, filterRarity, filterTrunfo } = this.state;
    if (filterTrunfo) {
      const filter = cardsCreated.filter((card) => card.cardTrunfo === true);
      this.setState({
        cardsList: filter,
        isFilterNameDisabled: true,
        isFilterRarityDisabled: true,
      });
    } else if (filterRarity === 'todas') {
      const filter = cardsCreated.filter((card) => (
        card.cardName.includes(filterName)));
      this.setState({
        cardsList: filter,
        isFilterNameDisabled: false,
        isFilterRarityDisabled: false,
      });
    } else {
      const filter = cardsCreated.filter((card) => (
        card.cardName.includes(filterName) && card.cardRare === (filterRarity)));
      this.setState({
        cardsList: filter,
        isFilterNameDisabled: false,
        isFilterRarityDisabled: false,
      });
    }
  };

  enableButton = () => {
    const {
      cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare,
    } = this.state;

    const total = 211;
    const inputLimit = 91;
    const attr = (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) < total
    && (Number(cardAttr1) >= 0 && Number(cardAttr1) < inputLimit)
    && (Number(cardAttr2) >= 0 && Number(cardAttr2) < inputLimit)
    && (Number(cardAttr3) >= 0 && Number(cardAttr3) < inputLimit);

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
  };

  onInputFilterChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.filterInputs);
  };

  disableTrunfo = () => {
    const { cardsCreated } = this.state;
    const some = cardsCreated.some(({ cardTrunfo }) => cardTrunfo === true);
    if (some) {
      this.setState({
        hasTrunfo: true,
        cardTrunfo: false,
      });
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
      cardsList: [...prevState.cardsCreated, savedItems],
    }), this.disableTrunfo);
  };

  deleteCard = (nameCard) => {
    const { cardsCreated } = this.state;
    const newCardsCreated = cardsCreated.filter((el) => el.cardName !== nameCard);
    this.setState({
      cardsCreated: newCardsCreated,
      cardsList: newCardsCreated,
      filterRarity: 'todas',
    }, this.disableTrunfo);
  };

  render() {
    const {
      cardName, cardDescription, filterName,
      cardAttr1, cardAttr2, cardAttr3, filterRarity,
      cardImage, cardRare, cardTrunfo, filterTrunfo,
      isSaveButtonDisabled, hasTrunfo, cardsList,
      isFilterRarityDisabled, isFilterNameDisabled,
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
            onInputFilterChange={ this.onInputFilterChange }
            filterRarity={ filterRarity }
            filterTrunfo={ filterTrunfo }
            isFilterNameDisabled={ isFilterNameDisabled }
            isFilterRarityDisabled={ isFilterRarityDisabled }
          />
          <CardList
            cardsList={ cardsList }
            deleteCard={ this.deleteCard }
          />
        </div>
      </div>
    );
  }
}

export default App;
