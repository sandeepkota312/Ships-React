import React from "react";
import "../styles.css";

const Search = (props) => {
  return (
    <div>
      <input
        placeholder="Search.."
        className="topnav"
        value={props.searchTerm}
        type="text"
        onChange={(e) => props.changeSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Search;
