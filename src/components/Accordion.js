import React, { useState } from 'react';

const Accordion = ({items}) => {

  //                    CLASS_COMPONENT             VS            FUNCTION_COMPONENT
  // Initialization: state = {activeIndex: 0}                       useState(0);
  // Reference:      this.state.activeIndex                         activeIndex;
  // Updates:        this.setState({activeIndex: 10})             setActiveIndex(10);

  // const [ PIECE_OF_STATE, F(X)_TO_CHANGE_STATE ] = useState( INIT_VALUE_FOR_THIS_PIECE_OF_STATE )
  // hook to allow use of state - this syntax utilizes 'array destructuring'
  const [activeIndex, setActiveIndex] = useState(null)

  // helper function
  const onTitleClick = (index) => {
    setActiveIndex(index)
  }

  const renderedItems = items.map((item, index) => {
    // variable to control which dropdown is active
    const active = index === activeIndex ? 'active' : ''

    return <React.Fragment key={item.title}>
      <div
        className={`title ${active}`}
        onClick={() => onTitleClick(index)}
      >
        <i className="dropdown icon"/>
        {item.title}
      </div>
      <div className={`content ${active}`}>
        <p>{item.content}</p>
      </div>
    </React.Fragment>
  })
  return (
    <div className="ui styled accordion">
      {renderedItems}
    </div>
  )
}

export default Accordion;