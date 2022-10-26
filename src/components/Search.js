import React from "react";

function Search({searchTerm,onSearch,changeSortBy}) {
  
  function handleChange(e){
    changeSortBy(e.target.value)
  }

  return (
    <>
      <div className="filter">
        <input id="search-bar" type="text" placeholder="Search Notes" value={searchTerm} onChange={(e)=>onSearch(e.target.value)} />
      </div>
      <div className="sortby">
        <select name="sortby" onChange={handleChange}>
          <option value="ALL">Sort By:</option>
          <option value="A-Z">A-Z</option>
          
        </select>
      </div>
    </>
  );
}

export default Search;
