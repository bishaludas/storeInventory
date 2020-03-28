import React, { Fragment, useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
// import axios from "axios";

const ShowItem = ({ match, itemDetails }) => {
  const [itemId, setitemId] = useState("");

  useEffect(() => {
    setitemId(match.params.id);
    // eslint-disable-next-line
  }, []);

  document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelectorAll(".materialboxed");
    var instances = M.Materialbox.init(elems);
  });

  // const getItem = async id => {
  //   const res = await axios.get(`endpoint/item/${itemId}`);
  //   console.log(res.data);
  // };

  return (
    <Fragment>
      <div className="row">
        <div className="col s12 m6 ">
          <div className="">
            <img
              className="materialboxed responsive-img"
              src="https://placeimg.com/640/480/any"
              alt="dummy_image"
            />
          </div>
        </div>

        <div className="col s12 m6 ">
          <ul className="collection with-header">
            <li className="collection-header">
              <h4>{itemDetails.item_name}</h4>
            </li>
            <li className="collection-item">
              Quantity : {itemDetails.quantity}
            </li>
            <li className="collection-item">Price : {itemDetails.price}</li>
            <li className="collection-item">
              Details : {itemDetails.keywords}
            </li>
            <li className="collection-item">Alvin</li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default ShowItem;
