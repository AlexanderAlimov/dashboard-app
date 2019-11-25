import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

function ProductCard({ title, price, id }) {
  return (
    <Link to={`/products/${id}`}>
      <Card title={title} style={{ width: 220 }}>
        <p>Price: {price} $ </p>
      </Card>
    </Link>
  );
}

export default ProductCard;
