import React, { Fragment, useState, useEffect } from "react";

const ShowItem = ({ match }) => {
  const [itemId, setitemId] = useState("");

  useEffect(() => {
    setitemId(match.params.id);
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      this item is : {itemId}
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A sint
        pariatur ad quam unde quae consequatur voluptate dolores rem deserunt.
      </p>
    </Fragment>
  );
};

export default ShowItem;
