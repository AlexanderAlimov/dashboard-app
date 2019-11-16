import Product from "../models/product.model";
import Category from "../models/category.model";

const handleError = res => err => {
  if (err) res.status(500).send({ message: err });
};
const handleSuccess = res => items => res.status(200).send({ data: items });

class Controller {
  getCategories(req, res, next) {
    Category.find({})
      .then(handleSuccess(res))
      .catch(handleError(res));
  }

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

  addCategory(req, res, next) {
    let category = new Category({ name: req.body.name });
    category
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

  removeCategory(req, res, next) {
    const id = req.params.id;
    let categoryId;
    Category.findOne({ name: "Without Category" })
      .then(category => {
        categoryId = category._id;
        return Product.updateMany({ category: id }, { category: categoryId });
      })
      .then(result => {
        return Category.findByIdAndRemove(id);
      })
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

const controller = new Controller();
export default controller;
