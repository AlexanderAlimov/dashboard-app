import Product from "../models/product.model";
import Category from "../models/category.model";

const ifError = (err, res) => {
  if (err) {
    res.status(500).send({ message: err });
    return;
  }
};

class Controller {
  getCategories(req, res, next) {
    Category.find((err, categories) => {
      ifError(err, res);
      res.status(200).send({
        data: categories
      });
    });
  }

  getProducts(req, res, next) {
    const id = req.query.category;
    let category = id ? { category: id } : {};
    Product.find(category, (err, products) => {
      ifError(err, res);
      res.status(200).send({
        data: products
      });
    });
  }

  addProduct(req, res, next) {
    Category.find({ name: req.body.category }, (err, category) => {
      ifError(err, res);
      const id = category[0]._id;

      let product = new Product({
        name: req.body.name,
        purchPrice: req.body.purchPrice,
        salePrice: req.body.salePrice,
        category: id
      });

      product.save(err => {
        ifError(err, res);
        res.status(200).send({
          data: product
        });
      });
    });
  }

  addCategory(req, res, next) {
    let category = new Category({ name: req.body.name });
    category.save(err => {
      ifError(err, res);
      res.status(200).send({
        data: category
      });
    });
  }

  removeProduct(req, res, next) {
    const id = req.params.id;
    Product.findByIdAndRemove(id, (err, product) => {
      ifError(err, res);
      res.status(200).send({
        data: product._id
      });
    });
  }

  removeCategory(req, res, next) {
    const id = req.params.id;
    let categoryId;
    Category.findByIdAndRemove(id, (err, category) => {
      ifError(err, res);
      Category.find({ name: "Without Category" }, (err, category) => {
        ifError(err, res);
        categoryId = category[0]._id;
        Product.find({ category: id }, (err, products) => {
          ifError(err, res);
          products.forEach(product => {
            product.category = categoryId;
            product.save();
          });
        });
      });
      res.status(200).send({
        data: category._id
      });
    });
  }

  editProduct(req, res, next) {
    const name = req.body.name,
      category = req.body.category,
      purchPrice = Number(req.body.purchPrice),
      salePrice = Number(req.body.salePrice);

    Category.find({ name: category }, (err, category) => {
      ifError(err);
      const categoryId = category[0]._id;
      Product.find({ _id: req.params.id }, (err, product) => {
        ifError(err, res);
        product[0].name = name;
        product[0].purchPrice = purchPrice;
        product[0].salePrice = salePrice;
        product[0].category = categoryId;
        product[0].save();
        res.status(200).send({
          data: product[0]
        });
      });
    });
  }
}

const controller = new Controller();
export default controller;
