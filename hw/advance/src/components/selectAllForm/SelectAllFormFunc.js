import React, { useState } from 'react';
import './style.css';

function SelectAllFormFunction() {
  const [selectedValues, setSelectedValues] = useState([]);
  const values = ["Kosher", "No Celery (inc celeriac)", "No Egg"];

  function selectAll(e) {
    setSelectedValues([...values]);
  }

  function addToSelectedValue(value) {
    if (!selectedValues.includes(value)) {
      setSelectedValues([...selectedValues, value]);
    } else {
      const selectedIndex = selectedValues.findIndex((option) => option === value);
      const newSelection = [...selectedValues];
      newSelection.splice(selectedIndex, 1);
      setSelectedValues(newSelection);
    }
  }

  function clearAll() {
    setSelectedValues([]);
  }

  return (
    <div className="App">
      <Title selectedValues={selectedValues} />
      <SelectAll
        selected={selectedValues.length === values.length}
        selectAll={selectAll}
        clearAll={clearAll}
      />

      {values.map((value, i) => (
        <CheckboxItem
          key={i}
          addToSelectedValue={addToSelectedValue}
          selected={selectedValues.includes(value)}
          value={value}
        />
      ))}

      <ClearAll clearAll={clearAll} />
    </div>
  );
}

function Title({ selectedValues }) {
  const selectedValuesMessage = selectedValues.length === 0
    ? 'Selected Value:'
    : `Selected Value: ${selectedValues.join(', ')}`;

  return <div className="title">{selectedValuesMessage}</div>;
}

function SelectAll({ selected, selectAll, clearAll }) {
  console.log(`all selected : ${selected}`);
  return (
    <div className="select-all">
      <input
        checked={selected}
        onChange={selected ? clearAll : selectAll}
        type="checkbox"
      />
      <label>Select All</label>
    </div>
  );
}

function CheckboxItem({ addToSelectedValue, selected, value }) {
  return (
    <div>
      <input
        type="checkbox"
        className={value}
        name={value}
        checked={selected}
        onChange={() => addToSelectedValue(value)}
      />
      <label htmlFor={value}>{value}</label>
    </div>
  );
}

function ClearAll({ clearAll }) {
  return (
    <div className="clearAll" onClick={clearAll}>
      Clear All
    </div>
  );
}

export default SelectAllFormFunction;