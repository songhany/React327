import React, { Component } from "react";
import store from "../../store";
import { withdrawMoney } from "../../actions";
//import photographer from "./images/girl.png";
import "../../App.css";

class BankApp extends Component {
  render() {
    const { totalAmount, username } = store.getState();

    const handleWithdrawMoney = e => {
      const amount = e.target.dataset.amount;
      store.dispatch(withdrawMoney(amount));
    };

    return (
      <div className="App">
        <img className="App__userpic" src={"https://image.ibb.co/nC8vGp/girl.png"} alt="photographer" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          <p className="App__amount--info">Total Amount {(totalAmount)}</p>
        </div>

        <section className="App__buttons">
          <button data-amount="10000">WITHDRAW $10,000</button>
          <button data-amount="5000">WITHDRAW $5,000</button>
        </section>

        <p className="App__giveaway">Give away all your cash to charity</p>
      </div>
    );
  }
}

export default BankApp;