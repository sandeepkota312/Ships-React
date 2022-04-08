import React from "react";
import Ship from "./ship";

const Gather = (props) => {
  const data = props.data;
  return (
    <>
      <div className="result">{data.length} Results Found</div>
      <div className="grid-container">
        {data.map((ship) => (
          <Ship key={ship.name} ship_name={ship.name} ship_img={ship.image} />
        ))}
      </div>
    </>
  );
};

export default Gather;
