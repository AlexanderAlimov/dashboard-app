import Product from "../models/product.model";
import Category from "../models/category.model";

const handleError = (err, res) => res.status(500).send({ message: err });

class Controller {
  getCategories(req, res, next) {
    Category.find({})
      .then(categories => {
        res.status(200).send({
          data: categories
        });
      })
      .catch(err => {
        if (err) handleError(err, res);
      });
  }

  getProducts(req, res, next) {
    const id = req.query.category;
    let category = id ? { category: id } : {};
    Product.find(category)
      .then(products => {
        res.status(200).send({
          data: products
        });
      })
      .catch(err => {
        if (err) handleError(err, res);
      });
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
        product
          .save()
          .then(product => {
            res.status(200).send({
              data: product
            });
          })
          .catch(err => {
            if (err) handleError(err, res);
          });
      })
      .catch(err => {
        if (err) handleError(err, res);
      });
  }

  addCategory(req, res, next) {
    let category = new Category({ name: req.body.name });
    category
      .save()
      .then(category => {
        res.status(200).send({
          data: category
        });
      })
      .catch(err => {
        if (err) handleError(err, res);
      });
  }

  removeProduct(req, res, next) {
    const id = req.params.id;
    Product.findByIdAndRemove(id)
      .then(product => {
        res.status(200).send({
          data: product._id
        });
      })
      .catch(err => {
        if (err) handleError(err, res);
      });
  }

  removeCategory(req, res, next) {
    const id = req.params.id;
    let categoryId;
    Category.findByIdAndRemove(id).then(category => {
      Category.find({ name: "Without Category" })
        .then(category => {
          categoryId = category[0]._id;
          Product.find({ category: id })
            .then(products => {
              products.forEach(product => {
                product.category = categoryId;
                product.save();
              });
            })
            .catch(err => {
              if (err) handleError(err, res);
            });
        })
        .then(() => {
          res.status(200).send({
            data: category._id
          });
        })
        .catch(err => {
          if (err) handleError(err, res);
        });
    });
  }

  editProduct(req, res, next) {
    const name = req.body.name,
      category = req.body.category,
      purchPrice = Number(req.body.purchPrice),
      salePrice = Number(req.body.salePrice);

    Category.find({ name: category })
      .then(category => {
        const categoryId = category[0]._id;
        Product.find({ _id: req.params.id })
          .then(item => {
            const product = item[0];
            product.name = name;
            product.purchPrice = purchPrice;
            product.salePrice = salePrice;
            product.category = categoryId;
            product.save();
            res.status(200).send({
              data: product
            });
          })
          .catch(err => {
            if (err) handleError(err);
          });
      })
      .catch(err => {
        if (err) handleError(err);
      });
  }
}

const controller = new Controller();
export default controller;
