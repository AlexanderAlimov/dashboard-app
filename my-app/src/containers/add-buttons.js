import { connect } from 'react-redux';
import {addProduct} from '../actions';
import AddButton from '../components/buttons/add-btn';


const newProductTest = {
	id: 222,
	name: "testProduct",
	purchPrice: 999,
	salesPrice: 9999
}

const mapDispatchToProps = (dispatch ) => ({
	onClick: () => dispatch(addProduct(newProductTest))
})

export default connect(mapDispatchToProps)(AddButton);



