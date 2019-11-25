import React, { useEffect } from "react";
import NavHeader from "../header";
import { Layout } from "antd";
import { useParams } from "react-router-dom";

const { Content } = Layout;

function ProductDetails({ isLogin, getProduct, product }) {
  const { id } = useParams();
  useEffect(() => {
    getProduct(id);
  }, []);
  return (
    <Layout>
      <NavHeader isLogin={isLogin} />
      <Content>
        <div className="product-details">
          <h1>{product.name}</h1>
          <hr />
          <h3>Price: {product.salePrice} $</h3>
          <h4>Category:{product.category}</h4>
        </div>
      </Content>
    </Layout>
  );
}

export default ProductDetails;
