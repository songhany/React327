import React, { Component } from 'react'
import "./styles.css";

export default class SelectAllForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValues: [],
      selectAllChecked: false,
      kosherChecked: false,
      noCeleryChecked: false,
      noEggChecked: false,
    };
  }

  selectAll() {
    let checkboxs = document.querySelectorAll('input[type="checkbox"]');
    
    let selectedValues = [];
    checkboxs.forEach((checkbox) => {
      if (checkbox.name !== "selectAll") {
        selectedValues.push(checkbox.nextSibling.textContent);
      }
    });
  
    this.setState((prevState) => ({
      selectAllChecked: !prevState.selectAllChecked,
      kosherChecked: !prevState.selectAllChecked,
      noCeleryChecked: !prevState.selectAllChecked,
      noEggChecked: !prevState.selectAllChecked,
      selectedValues: !prevState.selectAllChecked ? selectedValues : [],
    }));
  }

  handleCheckboxChange(event) {
    // console.log("event.target", event.target);
    const checkboxName = event.target.name;
    const isChecked = event.target.checked;
    // console.log(checkboxName, "isChecked:", isChecked);

    let checkboxs = document.querySelectorAll('input[type="checkbox"]');
    let maxNumCheckboxes = checkboxs.length - 1; // Subtract 1 for the "Select All" checkbox

    this.setState((prevState) => ({
      [checkboxName]: isChecked,
      selectedValues: isChecked ? 
        [...prevState.selectedValues, event.target.nextSibling.textContent]
        : prevState.selectedValues.filter((val) => val !== event.target.nextSibling.textContent),

      selectAllChecked: isChecked && prevState.selectedValues.length === maxNumCheckboxes - 1,
    }));
  }

  clearAll() {
    let checkboxs = document.querySelectorAll('input[type="checkbox"]');
    this.setState({
      selectedValues: [],
      selectAllChecked: false,
      kosherChecked: false,
      noCeleryChecked: false,
      noEggChecked: false,
    });
  }

  render() {
    const selectedValuesMessage = this.state.selectedValues.length === 0 ? "Selected Value:" : `Selected Value: ${this.state.selectedValues.join(", ")}`;

    return (
      <div className="form-container">
        <div className="selected-value" style={{ background: "yellow" }}>{selectedValuesMessage}</div>
        <input type="checkbox" className="select-all" name="selectAll" checked={this.state.selectAllChecked} onChange={() => this.selectAll()}/>
        <label htmlFor="selectAll">Select All</label>

        <br />
        <input type="checkbox" className="kosher" name="kosherChecked" checked={this.state.kosherChecked}
          onChange={(event) => this.handleCheckboxChange(event)}
        />
        <label htmlFor="kosher">Kosher</label>

        <br />
        <input type="checkbox" className="no-celery" name="noCeleryChecked" checked={this.state.noCeleryChecked}
          onChange={(event) => this.handleCheckboxChange(event)}
        />
        <label htmlFor="no-celery">No Celery (inc celeriac)</label>

        <br />
        <input type="checkbox" className="no-egg" name="noEggChecked" checked={this.state.noEggChecked}
          onChange={(event) => this.handleCheckboxChange(event)}
        />
        <label htmlFor="no-egg">No Egg</label>

        <br />
        <div className="clearAll" onClick={this.clearAll}>
          Clear All
        </div>
      </div>
    )
  }
}
