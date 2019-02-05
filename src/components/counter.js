import React from 'react';
import {incSvg, decSvg, resSvg} from './svg-items';
import {connect} from 'react-redux';
import * as actions from '../actions';

const Counter = ({counter = 0, inc, dec, res}) => {
  return (
    <div className="wrapper">
      <div className="counter" >
        <span>{counter}</span>
      </div>

      <div className="buttons">
        <button onClick={inc} className="butn butn-inc">{incSvg}</button>
        <button onClick={dec} className="butn butn-dec">{decSvg}</button>
        <button onClick={res} className="butn butn-res">{resSvg}</button>
        {/* <button onClick={dnl} className="butn butn-dnl">{dnlSvg}</button> */}
        {/* <button onClick={upl} className="butn butn-upl">{uplSvg}</button> */}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

export default connect(mapStateToProps, actions)(Counter)