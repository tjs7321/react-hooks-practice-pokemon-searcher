import React, {useState} from "react";

//by passing the state, when we update in our search form
//we can set it at a a higher component


function Search({setSearch}) {

  function handleSearchChange(e){
    setSearch(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleSearchChange} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
