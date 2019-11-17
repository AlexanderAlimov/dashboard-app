import React, { useState } from "react";
import { Form, Input, Button } from "antd";

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

function AuthForm({ onOk, onClick }) {
  const [authValue, setInputValue] = useState("");

  const handleChange = e => {
    const target = e.target ? e.target : e;
    const { value, name } = target;
    setInputValue({
      ...authValue,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onOk();
    onClick(authValue);
    setInputValue("");
  };

  return (
    <Form {...formItemLayout} onSubmit={handleSubmit}>
      <Form.Item label="Name" hasFeedback>
        <Input
          placeholder="username"
          onChange={handleChange}
          value={authValue.username}
          name="username"
        />
      </Form.Item>

      <Form.Item label="Password" hasFeedback>
        <Input
          placeholder="password"
          onChange={handleChange}
          value={authValue.password}
          name="password"
        />
      </Form.Item>
      <Form.Item wrapperCol={{ span: 16, offset: 10 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
export default AuthForm;
