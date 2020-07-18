import React from 'react'

const Link = ({className, href, children}) => {

  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault()
    // allows user to change url but not refresh the browser - reducing network usage
    window.history.pushState({}, '', href)
    // tell components about url change
    const navEvent = new PopStateEvent('popstate')
    window.dispatchEvent(navEvent)
  }
  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link
