import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const options = [
  {
    label: 'The Color Red',
    value: 'Red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'A Shade of Blue',
    value: 'blue'
  },
]

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  },
]

export default () => {
  const [selected, setSelected] = useState(options[0])
  const [showDropdown, setShowDropdown] = useState(true)

  return (
    <div>
      {/*<Accordion items={items}/>*/}
      {/*<Search/>*/}
      <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      { showDropdown ?
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
      : null }
    </div>
  )
}