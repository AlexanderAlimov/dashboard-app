export const addProduct = payload => ({
	type: 'ADD_PRODUCT',
	payload
})

export const removeProduct = id => ({
	type: "REMOVE_PRODUCT",
	id
})

export const addCategory = payload => ({
	type: "ADD_CATEGORY",
	payload
})

export const removeCategory = text => ({
	type: "REMOVE_CATEGORY",
	text
})