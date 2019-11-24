import React from "react";
import { Card } from "antd";
import { useHistory } from "react-router-dom";

function ProductCard({ title, price, id }) {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/${id}`);
  };
  return (
    <Card title={title} style={{ width: 220 }} onClick={handleClick}>
      <p>Price: {price} $ </p>
    </Card>
  );
}

export default ProductCard;
