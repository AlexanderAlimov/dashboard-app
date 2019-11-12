import fs from "fs";
import path from "path";
import Product from "../models/product.model";
import Category from "../models/category.model";
const dirPath = path.join(__dirname, "../db/db.json");

const writeToDb = (dataBase, res, item) => {
  fs.writeFile(dirPath, JSON.stringify(dataBase), (error, data) => {
    if (error) {
      res.status(500).send({
        message: error
      });
    }
    res.status(200).send({
      data: item
    });
  });
};

const parseData = data => JSON.parse(data);

const accessDB = onSuccess => {
  fs.readFile(dirPath, (error, data) => {
    if (error) {
      res.status(500).send({ message: error });
      return;
    }
    const dB = parseData(data);
    onSuccess(dB);
  });
};

class Controller {
  getCategories(req, res, next) {
    Category.find((err, categories) => {
      res.status(200).send({
        data: categories
      });
    });
  }

  getProducts(req, res, next) {
    const id = req.query.category;
    let filterProducts = [];
    Product.find(function(err, products) {
      if (err) return next(err);
      if (id) {
        filterProducts = products.filter(item => item.category === id);
      }
      res.status(200).send({
        data: id ? filterProducts : products
      });
    });
  }

  addProduct(req, res, next) {
    Category.find({ name: req.body.category }, (error, category) => {
      if (error) console.log(error);
      const id = category[0]._id;

      let product = new Product({
        name: req.body.name,
        purchPrice: req.body.purchPrice,
        salePrice: req.body.salePrice,
        category: id
      });

      product.save(function(err) {
        if (err) {
          return next(err);
        }
        res.status(200).send({
          data: product
        });
      });
    });
  }

  addCategory(req, res, next) {
    let category = new Category({ name: req.body.name });
    category.save(function(err) {
      if (err) {
        return next(err);
      }
      res.status(200).send({
        data: category
      });
    });
  }

  removeProduct(req, res, next) {
    // accessDB(dB => {
    //   dB.products = dB.products.filter(item => {
    //     return Number(item.id) !== Number(req.params.id);
    //   });
    //   writeToDb(dB, res, req.params.id);
    // });

    const id = req.params.id;
    Product.findByIdAndRemove(id, (error, product) => {
      if (error) console.log(error);
      res.status(200).send({
        data: product._id
      });
    });
  }

  removeCategory(req, res, next) {
    const id = req.params.id;
    Category.findByIdAndRemove(id, (error, category) => {
      if (error) console.log(error);
      res.status(200).send({
        data: category._id
      });
    });
  }

  editProduct(req, res, next) {
    accessDB(dB => {
      const prodId = req.params.id;
      const prodIndex = dB.products.findIndex(item =>
        Number(item.id === Number(prodId))
      );
      const editedProduct = {
        id: Number(prodId),
        name: req.body.name,
        category: req.body.category,
        purchPrice: Number(req.body.purchPrice),
        salePrice: Number(req.body.salePrice)
      };
      dB.products.splice(prodIndex, 1, editedProduct);
      writeToDb(dB, res, editedProduct);
    });
  }
}

const controller = new Controller();
export default controller;
