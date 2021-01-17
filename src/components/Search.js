import React from "react";

function Search({  searchInput, setSearchInput }) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={e => setSearchInput(e.target.value)} value={searchInput} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
