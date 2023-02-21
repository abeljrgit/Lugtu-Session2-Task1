import React from 'react';

export const GroceryList = (props) => {
  return (
    <div className="grocery-list">
      <h2>List of Grocery</h2>
      {props.groceryData.map((data) => (
        <div className="grocery-item" key={data.id}>
          <div>{data.groceryLabel}</div>
          <div>{data.description}</div>
        </div>
      ))}
    </div>
  );
};
