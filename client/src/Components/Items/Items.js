import React from 'react';

import Form from './Form'
import './Form.css'

function Items(props) {
  // const {items} = props;

  return (
    <div>
      <h1>Item</h1>
    
      <Form items={props.items} departments={props.departments}/>
      
  </div>
);
}

export default Items;