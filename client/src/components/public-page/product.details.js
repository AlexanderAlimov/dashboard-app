import React from "react";
import NavHeader from "../header";
import { Layout } from "antd";
import { useParams } from "react-router-dom";

const { Content } = Layout;

function ProductDetails({ isLogin, products, categories }) {
  const { id } = useParams();
  const product = products.filter(prod => String(id) === String(prod._id));
  const category = categories.filter(
    categ => String(product[0].category) === String(categ._id)
  );
  return (
    <Layout>
      <NavHeader isLogin={isLogin} />
      <Content>
        <div className="product-details">
          <h1>{product[0].name}</h1>
          <hr />
          <h3>Price:{product[0].salePrice}$</h3>
          <h4>Category:{category[0].name}</h4>
        </div>
      </Content>
    </Layout>
  );
}

export default ProductDetails;
