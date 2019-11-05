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

function EditProduct(props) {
  const { onOk, onClick, categories, prod } = props;
  const [productValue, setInputValue] = useState({
    name: prod.name,
    purchPrice: prod.purchPrice,
    salePrice: prod.salePrice,
    category: prod.category
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
    const editProduct = { ...productValue, id: prod.id };
    e.preventDefault();
    onClick(editProduct);
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
          Save
        </Button>
      </Form.Item>
    </Form>
  );
}

export default EditProduct;
