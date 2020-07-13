import React, { useEffect, useRef, useState } from 'react'

const Dropdown = ({options, selected, onSelectedChange}) => {
  const [open, setOpen] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false)
    }
    document.body.addEventListener('click', onBodyClick)
    // remove event listener whenever Dropdown is removed from the dom
    return () => {
      document.body.removeEventListener('click', onBodyClick)
    }
  }, [])

  const renderedOptions = options.map((option) => {
    // remove selected option from dropdown for clarity 🔮
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    )
  })
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"/>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown;