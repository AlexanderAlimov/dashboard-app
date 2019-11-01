const intitialState = [
	{name : "Category1", id:"1"},
	{name : "Category2", id:"2"},
	{name : "Category3", id:"3"},
	{name : "Category4", id:"4"},
	{name : "Without Category", id:"5"}
]

const categories = (state = intitialState , action) => {
	switch(action.type){
		case "ADD_CATEGORY" :
			return [
				...state,
				{
					name: action.payload.name,
					id: action.payload.id
				}
			]
		case "REMOVE_CATEGORY":
			return state.filter(item=> item.id !== action.id)
		default:
			return state;
	}
}

export default categories;