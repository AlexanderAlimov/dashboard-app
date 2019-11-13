import React, { useState } from "react";
import { Select, Input, Button, Form } from "antd";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 }
  }
};

function AddEditProduct(props) {
  const { onOk, onClick, categories, title, prod } = props;
  const name = title === "Edit" ? prod.name : "";
  const purchPrice = title === "Edit" ? prod.purchPrice : "";
  const salePrice = title === "Edit" ? prod.salePrice : "";
  const category = title === "Edit" ? prod.category : "";

  const [productValue, setInputValue] = useState({
    name: name,
    purchPrice: purchPrice,
    salePrice: salePrice,
    category: category
  });
  const handleChange = e => {
    const target = e.target ? e.target : e;
    const { value, name } = target;
    setInputValue({
      ...productValue,
      [name]: value
    });
  };
  const handleSubmit = e => {
    const product =
      title === "Edit" ? { ...productValue, id: prod._id } : productValue;
    e.preventDefault();
    onClick(product);
    onOk();
    setInputValue("");
  };

  const arrCategories = categories.map(el => {
    return (
      <option key={el.id} value={el.name}>
        {el.name}
      </option>
    );
  });

  const buttonName = title === "Edit" ? "Save" : "Add";

  return (
    <Form {...formItemLayout} onSubmit={handleSubmit}>
      <Form.Item label="Categories" hasFeedback>
        <select
          placeholder="categories"
          onChange={handleChange}
          name="category"
          value={productValue.category}
        >
          {arrCategories}
        </select>
      </Form.Item>

      <Form.Item label="Name" hasFeedback>
        <Input
          placeholder="name"
          onChange={handleChange}
          value={productValue.name}
          name="name"
        />
      </Form.Item>

      <Form.Item label="Order Price" hasFeedback>
        <Input
          placeholder="order price"
          onChange={handleChange}
          value={productValue.purchPrice}
          name="purchPrice"
        />
      </Form.Item>

      <Form.Item label="Sale Price" hasFeedback>
        <Input
          placeholder="sale price"
          onChange={handleChange}
          value={productValue.salePrice}
          name="salePrice"
        />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 16, offset: 10 }}>
        <Button onClick={onOk} type="primary" htmlType="submit">
          {buttonName}
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AddEditProduct;
