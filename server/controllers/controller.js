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
    Category.find({ name: req.body.category })
      .then(data => {
        const id = data[0]._id;
        let product = new Product({
          name: req.body.name,
          purchPrice: req.body.purchPrice,
          salePrice: req.body.salePrice,
          category: id
        });
        return product.save();
      })
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
      .then(handleSuccess(res))
      .catch(handleError(res));
  }

  removeCategory(req, res, next) {
    const id = req.params.id;
    let categoryId;
    Category.find({ name: "Without Category" })
      .then(category => {
        categoryId = category[0]._id;
        return Product.updateMany({ category: id }, { category: categoryId });
      })
      .then(result => {
        return Category.findByIdAndRemove(id);
      })
      .then(handleSuccess(res))
      .catch(handleError(res));
  }

  editProduct(req, res, next) {
    const { name, category, purchPrice, salePrice } = req.body;
    let categoryId;
    Category.find({ name: category })
      .then(category => {
        categoryId = category[0]._id;
        return Product.find({ _id: req.params.id });
      })
      .then(item => {
        const product = item[0];
        product.name = name;
        product.purchPrice = Number(purchPrice);
        product.salePrice = Number(salePrice);
        product.category = categoryId;
        return product.save();
      })
      .then(handleSuccess(res))
      .catch(handleError(res));
  }
}

const controller = new Controller();
export default controller;
