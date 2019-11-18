import Product from "../models/product.model";
import { handleError, handleSuccess } from "../utils/utils";

class ProductController {
  getProducts(req, res, next) {
    const id = req.query.category;
    let category = id ? { category: id } : {};
    Product.find(category)
      .then(handleSuccess(res))
      .catch(handleError(res));
  }

  addProduct(req, res, next) {
    const { name, purchPrice, salePrice, category } = req.body;
    let product = new Product({
      name: name,
      purchPrice: purchPrice,
      salePrice: salePrice,
      category: category
    });
    product
      .save()
      .then(handleSuccess(res))
      .catch(handleError(res));
  }

  removeProduct(req, res, next) {
    const id = req.params.id;
    Product.findByIdAndRemove(id)
      .then(result => {
        return result._id;
      })
      .then(handleSuccess(res))
      .catch(handleError(res));
  }

  editProduct(req, res, next) {
    const { name, category, purchPrice, salePrice } = req.body;
    Product.findOne({ _id: req.params.id })
      .then(item => {
        const product = item;
        product.name = name;
        product.purchPrice = Number(purchPrice);
        product.salePrice = Number(salePrice);
        product.category = category;
        return product.save();
      })
      .then(handleSuccess(res))
      .catch(handleError(res));
  }
}

const productController = new ProductController();
export default productController;
