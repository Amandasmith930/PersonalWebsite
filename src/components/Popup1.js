import React from "react";

// const Popup = props => {
 function Popup1(props) {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon1" onClick={props.handleClose}>x</span>
        {props.content1}
      </div>
    </div>
  );
};
 
export default Popup1;