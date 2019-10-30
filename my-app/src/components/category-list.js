import React from 'react';
import Category from './category';
import RemoveCategoryBtn from "./buttons/rem-categ-btn";

const categoryArr = [
	{name : "Category1", id:"1"},
	{name : "Category2", id:"2"},
	{name : "Category3", id:"3"},
	{name : "Category4", id:"4"},
	{name : "Without Category", id:"5"}
]

const category = categoryArr.map(el=>{
	return (
		<li key={el.id}>
			<RemoveCategoryBtn/>
			<Category name={el.name}/>
		</li>
	)
	
})

class CategoryList extends React.Component{
	render(){
		return <ul className="col-category-list">{category}</ul>
	}
}
export default CategoryList;