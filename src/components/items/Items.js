import React from "react";
import ListItem from "./ListItem";
import PropTypes from "prop-types";

const Items = ({ items, SearchKeyword }) => {
  // console.log(SearchKeyword);

  var filterItems = [];
  if (SearchKeyword !== "") {
    filterItems = items.filter(item => {
      return (
        item.name.toLowerCase() === SearchKeyword.toLowerCase() ||
        item.keyword.includes(SearchKeyword.toLowerCase())
      );
    });
  } else {
    filterItems = items;
  }
  // console.log(filterItems);

  return (
    <div className="row">
      <div className="col s12 pb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quod
        quidem ducimus soluta! Sed quae quam quaerat. Aperiam velit dolore
        laudantium maxime saepe animi, nulla asperiores architecto.
      </div>
      {/* items list */}
      <div className="col s12">
        <table className="highlight">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Item Price</th>
            </tr>
          </thead>

          <tbody>
            {filterItems.map(item => (
              <ListItem key={item.id} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Items.propTypes = {
  items: PropTypes.array.isRequired,
  SearchKeyword: PropTypes.string.isRequired
};
export default Items;
