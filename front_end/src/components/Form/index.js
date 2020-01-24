import React from 'react';
import { Label, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import 'font-awesome/css/font-awesome.min.css';

import './form.css';


const Search = () => {
  return (
    <div>
      <InputGroup>
        <Input placeholder="username" />
      </InputGroup>
    </div>
  )
}


const FormCartItem = (props) => {

  const addTotal = () => {
    props.addTotal()
  }

  const delTotal = () => {
    props.delTotal()
  }

  return (
    <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText
            className="iconSearch"
            onClick={props.totalItem <= 1 ? null : () => delTotal()}

          ><span className="fa fa-minus" ></span></InputGroupText>
        </InputGroupAddon>
        <Input value={props.totalItem} className="text-center" />
        <InputGroupAddon addonType="append">
          <InputGroupText
            className="iconSearch"
            onClick={() => addTotal()}
          ><span className="fa fa-plus"></span></InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

export { Search, FormCartItem }
