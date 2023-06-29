import React, { useState, useEffect} from "react";

const data = [
  { name: "Kosher", checked: true},
  { name: "No Celery", checked: false},
  { name: "No Egg", checked: false},
]

export default function SelectForm() {
  const [ items, setItems ] = useState(data);

  function handleToggleCheckbox(e, name) {
    // console.log(e.target);

    const tempItems = [...items].map(item => {
      if (item.name === name) {
        return {
          ...item,
          checked: e.target.checked
        };
      }
      return item;
    });
    // console.log(tempItems);
    setItems(tempItems);
  }

  function clearAll() {
    const tempItems = [...items].map((item) => {
        return {
          ...item,
          checked: false,
        };
    });
    // console.log(tempItems);
    setItems(tempItems);
  }

  function handleSelectAll(e) {
    if (!e.target.checked) {
      clearAll();
    } else {
      // set every checkbox to checked
      const tempItems = [...items].map((item) => {
        return {
          ...item,
          checked: true,
        };
      });
      // console.log(tempItems);
      setItems(tempItems);
    }
  }

  function isAllSelected() {
    const unChecked = items.find(item => !item.checked)
    console.log(unChecked)

    // if (unChecked) return false;
    // return true;
    return !unChecked;
  }

  return (
    <div>
      <h1>Form</h1>
      <SelectedValues items={items} />

      <div>
        <label>
          <input 
            type="checkbox"
            checked={isAllSelected()}
            onChange={handleSelectAll}
          />
            Select All
        </label>
      </div>

      <div>
        {items.map((item) => {
          return (
            <ItemCheckbox key={item.name} item={item} handleToggleCheckbox={handleToggleCheckbox}/>
          );
        })}
      </div>
      <button onClick={clearAll}>Clear All</button>
    </div>
  )
}

function SelectedValues({ items }) {
  return (
    <div>
      Selected Value: {" "} 
      {items
        .filter((item) => item.checked)
        .map((item) => (
          <span key={item.name}>{item.name}, </span>
        ))
      }
    </div>
  )
}

function ItemCheckbox({ item, handleToggleCheckbox }) {
  return (
    <div>
      <label>   {/* label good for Accessibility  */}
        <input 
          type="checkbox" 
          checked={item.checked}
          onChange={ e => handleToggleCheckbox(e, item.name) }
        />
        {item.name}
      </label>
    </div>
  )
}