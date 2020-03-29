import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import ListItem from "./ListItem";
import Preloader from "../layouts/Preloader";
import PropTypes from "prop-types";
import { getItems } from "../../actions/ItemsActions";

const Items = ({
  items: { items, loading },
  getItems,
  SearchKeyword,
  resetItems
}) => {
  useEffect(() => {
    if (items === null) {
      getItems();
    }
    // eslint-disable-next-line
  }, []);

  var filterItems = [];
  if (SearchKeyword !== "") {
    filterItems = items.filter(item => {
      return (
        item.item_name.toLowerCase() === SearchKeyword.toLowerCase() ||
        item.item_name.toLowerCase().includes(SearchKeyword.toLowerCase()) ||
        item.keywords.includes(SearchKeyword.toLowerCase())
      );
    });
  } else {
    filterItems = items;
  }

  // reset filter
  const clearFilter = e => {
    e.preventDefault();
    resetItems();
  };

  if (loading || items == null) {
    return (
      <Fragment>
        <Preloader />
      </Fragment>
    );
  }

  return (
    <div className="row">
      <div className="col s12 pb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quod
        quidem ducimus soluta! Sed quae quam quaerat. Aperiam velit dolore
        laudantium maxime saepe animi, nulla asperiores architecto.
      </div>

      {SearchKeyword !== "" ? (
        <a
          href="!#reset"
          className="waves-effect waves-light btn"
          style={{ backgroundColor: "#ee6e73" }}
          onClick={clearFilter}
        >
          <span> Reset</span> <i className="material-icons left">autorenew</i>
        </a>
      ) : (
        ""
      )}

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
  items: PropTypes.object.isRequired,
  SearchKeyword: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  items: state.items
});

export default connect(mapStateToProps, { getItems })(Items);
