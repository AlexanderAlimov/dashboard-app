import React, { useState } from "react";
import { Form, Icon, Input, Button } from "antd";

function NormalLoginForm(props) {
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
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
    props.onClick(authValue);
    setInputValue("");
  };

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <h1>Sign In</h1>
      <Form.Item>
        <Input
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Username"
          onChange={handleChange}
          value={authValue.username}
          name="username"
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Password"
          onChange={handleChange}
          value={authValue.password}
          name="password"
          type="password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalLoginForm
);

export default WrappedNormalLoginForm;
