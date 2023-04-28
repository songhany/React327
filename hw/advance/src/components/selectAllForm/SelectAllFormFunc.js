import React, { useState } from 'react';
import "./styles.css";

export default function SelectAllForm() {
  const [selectedValues, setSelectedValues] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [kosherChecked, setKosherChecked] = useState(false);
  const [noCeleryChecked, setNoCeleryChecked] = useState(false);
  const [noEggChecked, setNoEggChecked] = useState(false);

  const selectAll = () => {
    let checkboxs = document.querySelectorAll('input[type="checkbox"]');
    let selectedValues = [];
    checkboxs.forEach((checkbox) => {
      if (checkbox.name !== "selectAll") {
        selectedValues.push(checkbox.nextSibling.textContent);
      }
    });
  
    setSelectAllChecked((prevState) => {
      if (prevState) {  // if prevState == true, nextState will be false, so we call clearAll()
        clearAll();
      }
      // console.log(prevState);
      return !prevState;
    });

    setKosherChecked(prevState => !prevState.selectAllChecked);
    setNoCeleryChecked(prevState => !prevState.selectAllChecked);
    setNoEggChecked(prevState => !prevState.selectAllChecked);
    setSelectedValues(prevState => !prevState.selectAllChecked ? selectedValues : []);
  };

  const handleCheckboxChange = (event) => {
    const checkboxName = event.target.name;
    const isChecked = event.target.checked;

    let checkboxs = document.querySelectorAll('input[type="checkbox"]');
    let maxNumCheckboxes = checkboxs.length - 1;

    setSelectAllChecked(isChecked && selectedValues.length === maxNumCheckboxes - 1);
    setKosherChecked(checkboxName === 'kosherChecked' ? isChecked : kosherChecked);
    setNoCeleryChecked(checkboxName === 'noCeleryChecked' ? isChecked : noCeleryChecked);
    setNoEggChecked(checkboxName === 'noEggChecked' ? isChecked : noEggChecked);

    setSelectedValues(isChecked
      ? [...selectedValues, event.target.nextSibling.textContent]
      : selectedValues.filter((val) => val !== event.target.nextSibling.textContent)
    );
  };

  const clearAll = () => {
    setSelectedValues([]);
    setSelectAllChecked(false);
    setKosherChecked(false);
    setNoCeleryChecked(false);
    setNoEggChecked(false);
  };

  const selectedValuesMessage = selectedValues.length === 0 ? "Selected Value:" : `Selected Value: ${selectedValues.join(", ")}`;

  return (
    <div className="form-container">
      <div className="selected-value" style={{ background: "yellow" }}>{selectedValuesMessage}</div>
      <input type="checkbox" className="select-all" name="selectAll" checked={selectAllChecked} onChange={selectAll}/>
      <label htmlFor="selectAll">Select All</label>

      <br />
      <input
        type="checkbox"
        className="kosher"
        name="kosherChecked"
        checked={kosherChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="kosher">Kosher</label>

      <br />
      <input
        type="checkbox"
        className="no-celery"
        name="noCeleryChecked"
        checked={noCeleryChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="no-celery">No Celery (inc celeriac)</label>

      <br />
      <input
        type="checkbox"
        className="no-egg"
        name="noEggChecked"
        checked={noEggChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="no-egg">No Egg</label>

      <br />
      <button onClick={clearAll}>Clear All</button>
    </div>
  );
}