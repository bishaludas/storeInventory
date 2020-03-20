import React, { Fragment, useState, useEffect } from "react";
// import axios from "axios";

const ShowItem = ({ match }) => {
  const [itemId, setitemId] = useState("");

  useEffect(() => {
    setitemId(match.params.id);
    // eslint-disable-next-line
  }, []);

  // const getItem = async id => {
  //   const res = await axios.get(`endpoint/item/${itemId}`);
  //   console.log(res.data);
  // };

  return (
    <Fragment>
      this item is : {itemId}
      <div className="row">
        <div className="col s12 m6 ">
          <div className="blue">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            sunt repellat iusto consequatur esse officia asperiores eos fugiat
            amet quia.
            <p>Image will be here</p>
          </div>
        </div>
        <div className="col s12 m6 ">
          <ul class="collection with-header">
            <li class="collection-header">
              <h4>First Names</h4>
            </li>
            <li class="collection-item">Alvin</li>
            <li class="collection-item">Alvin</li>
            <li class="collection-item">Alvin</li>
            <li class="collection-item">Alvin</li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default ShowItem;
