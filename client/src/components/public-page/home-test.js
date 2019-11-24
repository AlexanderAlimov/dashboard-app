import React, { useEffect } from "react";
import { Layout } from "antd";
import NavHeader from "../header";
import CategoryList from "../../containers/dashboard/category-list";
import ProductCard from "../public-page/product-card";
import ShowAll from "../../containers/dashboard/show-all";

const { Sider, Content } = Layout;

function HomePage({ isLogin, products = [], getProducts = () => {} }) {
  useEffect(() => {
    getProducts();
  }, []);
  console.log(6666666);
  console.log(products);

  const productList = products.map(prod => {
    return (
      <li key={prod._id}>
        <ProductCard title={prod.name} price={prod.salePrice} />
      </li>
    );
  });
  return (
    <Layout>
      <NavHeader isLogin={isLogin} />
      <Layout>
        <Sider className="col-position">
          <ShowAll title="Show All" />
          <CategoryList place="home-page" />
        </Sider>
        <Content>
          <ul className="product-list">{productList}</ul>
        </Content>
      </Layout>
    </Layout>
  );
}

export default HomePage;
