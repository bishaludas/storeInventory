import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ setSearchKeyword }) => {
  const [searchItem, setSearchItem] = useState("");

  const onSearchItem = (e) => {
    e.preventDefault();
    if (searchItem === "") {
      console.log("Empyt");
    } else {
      setSearchKeyword(searchItem);
      setSearchItem("");
    }
  };

  return (
    <div className="row py-4">
      <div className="col m8 s12  offset-m2">
        {/* search item */}
        <form onSubmit={onSearchItem} className="form">
          <div className="row">
            <div className="col s10">
              <div className="input-field">
                <input
                  type="text"
                  name="searchItem"
                  value={searchItem}
                  onChange={(e) => setSearchItem(e.target.value)}
                  placeholder="Search Item..."
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="col s2">
              <a
                href="/about"
                className="waves-effect waves-light btn mt-2"
                style={{ backgroundColor: "#ee6e73" }}
                onClick={onSearchItem}
              >
                <i className="material-icons grey-text white-text">search</i>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  setSearchKeyword: PropTypes.func.isRequired,
};
export default SearchBar;
