import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ListItem = ({ item }) => {
  return (
    <Fragment>
      <tr>
        <td>
          <Link to={`/show-item/${item.id}`}>{item.name}</Link>
        </td>
        <td>Eclair</td>
        <td>1</td>
        <td>$0.87</td>
      </tr>
    </Fragment>
  );
};

ListItem.prototype = {
  item: PropTypes.object.isRequired
};

export default ListItem;
