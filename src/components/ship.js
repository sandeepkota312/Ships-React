import React from "react";
import "../styles.css";

const Ship = (props) => {
  return (
    <div className="ship_card grid-item">
      <img src={props.ship_img} alt={props.ship_name} />
      <div className="context">{props.ship_name}</div>
    </div>
  );
};

export default Ship;
