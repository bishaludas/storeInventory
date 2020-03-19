import React from "react";
import ListItem from "./ListItem";

const Items = () => {
  // usestate to getitems()
  const items = [
    {
      id: 1,
      name: "Potato",
      quantity: "1 dharni",
      price: 110
    },
    {
      id: 2,
      name: "Onion",
      quantity: "1 kg",
      price: 90
    }
  ];

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
              <th>Name</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Item Price</th>
            </tr>
          </thead>

          <tbody>
            {items.map(item => (
              <ListItem key={item.id} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Items;
