import React from "react";
import { Form, Input, Select, Button } from "antd";

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

function AddForm(props) {
  const { onOk, title } = props;

  if (title === "Add Category") {
    return (
      <Form {...formItemLayout}>
        <Form.Item label="Name" hasFeedback>
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 16, offset: 10 }}>
          <Button onClick={onOk} type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Form>
    );
  }

  return (
    <Form {...formItemLayout}>
      <Form.Item label="Categories" hasFeedback>
        <Select placeholder="categories">
          <Option value="1">Option 1</Option>
          <Option value="2">Option 2</Option>
          <Option value="3">Option 3</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Name" hasFeedback>
        <Input placeholder="name" />
      </Form.Item>

      <Form.Item label="Order Price" hasFeedback>
        <Input placeholder="order price" />
      </Form.Item>

      <Form.Item label="Sale Price" hasFeedback>
        <Input placeholder="sale price" />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 16, offset: 10 }}>
        <Button onClick={onOk} type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AddForm;
