import React from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';

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
    cardsCreated: [],
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
  };

  onSaveButtonClick = () => {
    // const { cardsCreated } = this.state;
    this.setState((prevState) => {
      const savedItems = {
        cardName: prevState.cardName,
        cardDescription: prevState.cardDescription,
        cardAttr1: prevState.cardAttr1,
        cardAttr2: prevState.cardAttr2,
        cardAttr3: prevState.cardAttr3,
        cardImage: prevState.cardImage,
        cardRare: prevState.cardRare,
      };
      return ({
        cardsCreated: [...prevState.cardsCreated, savedItems],
      });
    }, this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
    }));
  };

  render() {
    const {
      cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled,
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
      </div>
    );
  }
}

export default App;
