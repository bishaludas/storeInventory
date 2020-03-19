import React, { useState } from "react";

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState("");

  const onSearchItem = e => {
    if (searchItem === "") {
      console.log("Empyt");
    } else {
      console.log(searchItem);
    }
  };

  return (
    <div className="row pb-3">
      <div className="col m8 s12  offset-m2">
        {/* search item */}
        <div className="row">
          <div className="col s10">
            <div className="input-field">
              <input
                type="text"
                name="searchItem"
                value={searchItem}
                onChange={e => setSearchItem(e.target.value)}
                placeholder="Search Item..."
              />
            </div>
          </div>

          <div className="col s2">
            <a
              href="!#"
              className="waves-effect waves-light btn mt-2"
              style={{ backgroundColor: "#ee6e73" }}
              onClick={onSearchItem}
            >
              <i className="material-icons grey-text white-text">search</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
