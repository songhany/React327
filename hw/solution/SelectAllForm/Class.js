import React, { Component } from 'react';
import "./style.css";

export default class SelectAllFormClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValues: [],
      values: ["Kosher", "No Celery (inc celeriac)", "No Egg"],
    };
    this.selectAll = this.selectAll.bind(this);
    this.addToSelectedValue = this.addToSelectedValue.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }

  selectAll(e) {
    if (e.target.checked) {
      this.setState({ selectedValues: [...this.state.values] });
    } else {
      this.setState({ selectedValues: [] });
    }
  }

  addToSelectedValue(value) {
    if (!this.state.selectedValues.includes(value)) {
      let newSelection = [...this.state.selectedValues];
      newSelection.push(value);
      this.setState({
        selectedValues: newSelection
      });
    } else {
      const selectedIndex = this.state.selectedValues.findIndex((option) => option === value);
      let newSelection = [...this.state.selectedValues];
      newSelection.splice(selectedIndex, 1);
      this.setState({
        selectedValues: newSelection
      });
    }
  }

  clearAll() {
    this.setState({ selectedValues: [] });
  }

  render() {
    const selectedValuesMessage = this.state.selectedValues.length === 0 ? "Selected Value:" : `Selected Value: ${this.state.selectedValues.join(", ")}`;
    const allSelected = this.state.selectedValues.length === this.state.values.length;
    return (
      <div className="App">
        <Title selectedValues={this.state.selectedValues} />
        <SelectAll
          selected={allSelected}
          selectAll={this.selectAll}
          clearAll={this.clearAll}
        />
        {this.state.values.map((value, i) => {
          return (
            <CheckboxItem
              key={i}
              addToSelectedValue={this.addToSelectedValue}
              selected={this.state.selectedValues.includes(value)}
              value={value}
              values={this.state.values}
            />
          );
        })}
        <ClearAll clearAll={this.clearAll} />
      </div>
    );
  }
}

class Title extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const selectedValuesMessage =
      this.props.selectedValues.length === 0
        ? "Selected Value:"
        : `Selected Value: ${this.props.selectedValues.join(", ")}`;
    return <div className="title">{selectedValuesMessage}</div>;
  }
}

class SelectAll extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="select-all">
        <input
          checked={this.props.selected}
          onChange={
            this.props.selected ? this.props.clearAll : this.props.selectAll
          }
          type="checkbox"
        />
        <label>Select All</label>
      </div>
    )
  }
}

class CheckboxItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input 
          type="checkbox" 
          className={this.props.value} 
          name={this.props.value} 
          checked={this.props.selected}
          onChange={(event) => this.props.addToSelectedValue(this.props.value)}
        />
        <label htmlFor={this.props.value} >{this.props.value}</label>
      </div>
    )
  }
}

class ClearAll extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="clearAll" onClick={this.props.clearAll}>
        Clear All
      </div>
    );
  }
}