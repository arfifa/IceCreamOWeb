import React from 'react';
import { Button } from 'reactstrap';
import './button.css';

const ButtonDarkGreen = (props) => {
  return (
    <Button className="buttonDarkGreen mr-2" size={props.size}>{props.label}</Button>
  )
}

const ButtonLightGreen = (props) => {
  const onClick = () => {
    props.onClick()
  }

  return (
    <Button className="buttonLightGreen mr-2" size={props.size} onClick={() => onClick()}> {props.label}</Button >
  )
}

export { ButtonLightGreen, ButtonDarkGreen };