import React from 'react';
import './style.css';

const Editor = (props) => {
  const { 
    heading, 
    value, 
    onChange } = props;

  function handleChange(event) {
    onChange(event.target.value);
  }

  return (
    <div className='code-Edit'>
      <h1>{heading}</h1>
      <textarea onChange={handleChange} value={value} />
    </div>
  );
};

export default Editor;
