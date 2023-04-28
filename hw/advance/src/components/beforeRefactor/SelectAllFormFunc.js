import React, { useState } from 'react';
import "./style.css";

export default function SelectAllForm() {
  const [selectedValues, setSelectedValues] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [kosherChecked, setKosherChecked] = useState(false);
  const [noCeleryChecked, setNoCeleryChecked] = useState(false);
  const [noEggChecked, setNoEggChecked] = useState(false);

  const selectAll = () => {
    let checkboxs = document.querySelectorAll('.form-checkbox');
    console.log(checkboxs);
    let selectedValues = [];
    checkboxs.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox.name !== "selectAll") {
        selectedValues.push(checkbox.nextSibling.textContent);
      }
    });

    setKosherChecked(prevState => !prevState.selectAllChecked);
    setNoCeleryChecked(prevState => !prevState.selectAllChecked);
    setNoEggChecked(prevState => !prevState.selectAllChecked);
    setSelectedValues(prevState => !prevState.selectAllChecked ? selectedValues : []);

    // uncheck all other checkboxes if "Select All" is unchecked
    if (!selectAllChecked) {
      checkboxs.forEach((checkbox) => {
        if (checkbox.name !== "selectAll") {
          checkbox.checked = false;
        }
      });
    }
  };

  const handleCheckboxChange = (event) => {
    const checkboxName = event.target.name;
    const isChecked = event.target.checked;

    let checkboxs = document.querySelectorAll('.form-checkbox');
    let maxNumCheckboxes = checkboxs.length - 1; // Subtract 1 for the "Select All" checkbox

    setSelectAllChecked(() => {
      if (checkboxName === "selectAll") {
        return isChecked;
      }
      return isChecked && selectedValues.length === maxNumCheckboxes - 1;
    });

    setSelectedValues((prevSelectedValues) => {
      if (isChecked) {
        return [...prevSelectedValues, event.target.nextSibling.textContent];
      }
      return prevSelectedValues.filter((val) => val !== event.target.nextSibling.textContent);
    });

    // uncheck "Select All" if any other checkbox is unchecked
    if (checkboxName !== "selectAll" && !isChecked) {
      setSelectAllChecked(false);
    }
  };

  const clearAll = () => {
    let checkboxs = document.querySelectorAll('.form-checkbox');
    checkboxs.forEach((checkbox) => {
      checkbox.checked = false;
    });
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

      <input type="checkbox" className="select-all" name="selectAll" checked={selectAllChecked} onChange={selectAll} />
      <label htmlFor="selectAll">Select All</label>

      <br />
      <input type="checkbox" className="form-checkbox kosher" name="kosherChecked" checked={kosherChecked} onChange={handleCheckboxChange} />
      <label htmlFor="kosher">Kosher</label>

      <br />
      <input type="checkbox" className="form-checkbox no-celery" name="noCeleryChecked" checked={noCeleryChecked} onChange={handleCheckboxChange} />
      <label htmlFor="no-celery">No Celery (inc celeriac)</label>

      <br />
      <input type="checkbox" className="form-checkbox no-egg" name="noEggChecked" checked={noEggChecked} onChange={handleCheckboxChange} />
      <label htmlFor="no-egg">No Egg</label>

      <br />
      <div className="clearAll" onClick={clearAll}>
        Clear All
      </div>
    </div>
  );
}