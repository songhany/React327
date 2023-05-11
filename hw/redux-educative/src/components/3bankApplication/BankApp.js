import React, { Component } from 'react'
import { useDispatch } from 'react-redux';

export default class BankApp extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      username: "Janny",
      totalAmount: 2500701
    };
    const dispatch = useDispatch();
  }

  withdrawal10000(username, amount) {
    dis
  }
  render() {
    const { totalAmount, username } = this.state;
    return (
      <div className="App">
        <img className="App__userpic" src={"https://image.ibb.co/nC8vGp/girl.png"} alt="photographer" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">

          <p className="App__amount--info">Total Amount {totalAmount}</p>
        </div>

        <section className="App__buttons">
          <button data-amount="10000" onClick={}>WITHDRAW $10,000</button>
          <button data-amount="5000">WITHDRAW $5,000</button>
        </section>

        <p className="App__giveaway">Give away all your cash to charity</p>
      </div>
    );
  }
}
