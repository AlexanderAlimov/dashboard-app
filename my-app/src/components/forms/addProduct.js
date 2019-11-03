import React, { useState } from "react";

function AddProduct(props) {
	const { onClick, onOk, categories } = props;
  const [state, setState] = useState({
    name:"",
		purchPrice:"",
		salePrice:"",
		category:""
  })
function handleChange(evt) {
  const value = evt.target.value;
  setState({
    ...state,
    [evt.target.name]: value
  });
}

function handleSubmit(event){
event.preventDefault();
onClick(state);
onOk();
setState({
	name:"",
	purchPrice:"",
	salePrice:"",
	category:""
});
}

const arrCategories = categories.map(el=>{
	return <option key={el.id} value={el.name}>{el.name}</option>
})
  return (
		<form onSubmit={handleSubmit}>
			<label>
				Categories
				<select name="category" onChange={handleChange} value={state.category}>
					{arrCategories}
				</select>
			</label>
			<br/>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
      </label>
      <br/>
      <label>
        Purch price
        <input
          type="text"
          name="purchPrice"
          value={state.purchPrice}
          onChange={handleChange}
        />
      </label>
			<br/>
			<label>
        Sale Price
        <input
          type="text"
          name="salePrice"
          value={state.salePrice}
          onChange={handleChange}
        />
      </label>
      <br/>
      <label>
        <input
          type="submit"
        />
      </label>
    </form>
  );
}

export default AddProduct;