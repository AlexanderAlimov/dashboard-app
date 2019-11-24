import React from "react";
import { Card } from "antd";

function ProductCard({ title, price }) {
  return (
    <Card title={title} style={{ width: 220 }}>
      <p>Price: {price} $ </p>
    </Card>
  );
}

export default ProductCard;
