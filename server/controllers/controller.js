import fs from "fs";
import path from "path";
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
    accessDB(dB => {
      res.status(200).send({
        categories: dB.categories
      });
    });
  }

  getProducts(req, res, next) {
    accessDB(dB => {
      let filterProducts = null;
      if (req.query.category) {
        const id = req.query.category;
        filterProducts = dB.products.filter(item => {
          return Number(item.categoryId) === Number(id);
        });
      }
      res.status(200).send({
        products: req.query.category ? filterProducts : dB.products
      });
    });
  }

  addProduct(req, res, next) {
    accessDB(dB => {
      if (!req.body.name) {
        return res.status(400).send({
          message: "Name is Reuqired!"
        });
      }
      const prod = {
        id: dB.products.length + 1,
        name: req.body.name,
        purchPrice: req.body.purchPrice,
        salePrice: req.body.salePrice,
        category: req.body.category
      };
      dB.products.push(prod);
      writeToDb(dB, res, prod);
    });
  }

  addCategory(req, res, next) {
    accessDB(dB => {
      if (!req.body.name) {
        return res.status(400).send({});
      }
      const category = {
        id: dB.categories.length + 1,
        name: req.body.name
      };
      dB.categories.push(category);
      writeToDb(dB, res, category);
    });
  }

  removeProduct(req, res, next) {
    accessDB(dB => {
      dB.products = dB.products.filter(item => {
        return Number(item.id) !== Number(req.params.id);
      });
      writeToDb(dB, res, req.params.id);
    });
  }

  removeCategory(req, res, next) {
    accessDB(dB => {
      dB.categories = dB.categories.filter(item => {
        return Number(item.id) !== Number(req.params.id);
      });
      writeToDb(dB, res, req.params.id);
    });
  }
}

const controller = new Controller();
export default controller;
