import React, { useState } from "react";
import { Form, Input, Select, Button } from "antd";

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

function AddCategory(props) {
  const { onOk, title, onClick } = props;
	const [categoryValue, setInputValue] = useState("");

  const handleChange = e => {
		setInputValue(e.target.value)
	};

  const handleSubmit = e => {
		e.preventDefault();
    onClick({ name: categoryValue, id: 12345 });
    onOk();
    setInputValue("");
	};
	
	return (
		<Form {...formItemLayout} onSubmit={handleSubmit}>
			<Form.Item label="Name" hasFeedback>
				<Input
					placeholder="Name"
					onChange={handleChange}
					value={categoryValue}
				/>
			</Form.Item>

			<Form.Item wrapperCol={{ span: 16, offset: 10 }}>
				<Button type="primary" htmlType="submit">
					Add Category
				</Button>
			</Form.Item>
		</Form>
	);
}
export default AddCategory;
