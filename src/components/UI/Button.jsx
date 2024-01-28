import React from 'react'

export default function Button(props) {

  const cssClasses = props.isText ? 'button' : 'text-button';

  return (
    <button className={cssClasses} onClick={props.onClick}>
        {props.children}
    </button>
  );
}
