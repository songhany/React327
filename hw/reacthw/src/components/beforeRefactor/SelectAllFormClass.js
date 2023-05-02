import React, { Component } from 'react'
import "./style.css";

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
    let checkboxs = document.querySelectorAll('.form-checkbox');
    console.log(checkboxs);
    let selectedValues = [];
    checkboxs.forEach((checkbox) => {
      console.log(checkbox);
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

    // uncheck all other checkboxes if "Select All" is unchecked
    if (!this.state.selectAllChecked) {
      checkboxs.forEach((checkbox) => {
        if (checkbox.name !== "selectAll") {
          checkbox.checked = false;
        }
      });
    }
  }

  handleCheckboxChange(event) {
    // console.log("event.target", event.target);
    const checkboxName = event.target.name;
    const isChecked = event.target.checked;
    // console.log(checkboxName, "isChecked:", isChecked);

    let checkboxs = document.querySelectorAll('.form-checkbox');
    let maxNumCheckboxes = checkboxs.length - 1; // Subtract 1 for the "Select All" checkbox

    this.setState((prevState) => ({
      [checkboxName]: isChecked,
      selectedValues: isChecked ? 
        [...prevState.selectedValues, event.target.nextSibling.textContent]
        : prevState.selectedValues.filter((val) => val !== event.target.nextSibling.textContent),

      // update selectAllChecked state correctly
      selectAllChecked: checkboxName === "selectAll" ? isChecked :
        isChecked && prevState.selectedValues.length === maxNumCheckboxes - 1,
    }));

    // uncheck "Select All" if any other checkbox is unchecked
    if (checkboxName !== "selectAll" && !isChecked) {
      this.setState({
        selectAllChecked: false,
      });
    }
  }

  clearAll() {
    let checkboxs = document.querySelectorAll('.form-checkbox');
    checkboxs.forEach((checkbox) => {
      checkbox.checked = false;
    });
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
        <input type="checkbox" className="form-checkbox kosher" name="kosherChecked" checked={this.state.kosherChecked}
          onChange={(event) => this.handleCheckboxChange(event)}
        />
        <label htmlFor="kosher">Kosher</label>

        <br />
        <input type="checkbox" className="form-checkbox no-celery" name="noCeleryChecked" checked={this.state.noCeleryChecked}
          onChange={(event) => this.handleCheckboxChange(event)}
        />
        <label htmlFor="no-celery">No Celery (inc celeriac)</label>

        <br />
        <input type="checkbox" className="form-checkbox no-egg" name="noEggChecked" checked={this.state.noEggChecked}
          onChange={(event) => this.handleCheckboxChange(event)}
        />
        <label htmlFor="no-egg">No Egg</label>

        <br />
        <div className="clearAll" onClick={() => this.clearAll()}>
          Clear All
        </div>
      </div>
    )
  }
}