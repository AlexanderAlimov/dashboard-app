import fs from "fs";
import path from "path";
const dirPath = path.join(__dirname, "../db/db.json");

class Controller {
  getCategories(req, res, next) {
    fs.readFile(dirPath, (error, data) => {
      if (error) throw error;
      const dB = JSON.parse(data);
      res.status(200).send({
        categories: dB.categories
      });
    });
  }

  getProducts(req, res, next) {
    fs.readFile(dirPath, (error, data) => {
      if (error) throw error;
      const dB = JSON.parse(data);
      res.status(200).send({
        products: dB.products
      });
    });
  }

  getFilterProducts(req, res, next) {
    fs.readFile(dirPath, (error, data) => {
      if (error) throw error;
      const dB = JSON.parse(data);
      const id = req.query.category;
      const filterProducts = dB.products.filter(item => {
        return Number(item.categoryId) === Number(id);
      });
      res.status(200).send({
        products: filterProducts
      });
    });
  }

  addProduct(req, res, next) {
    fs.readFile(dirPath, (error, data) => {
      if (error) {
        console.log(error);
        return;
      }
      const dB = JSON.parse(data);
      if (!req.body.name) {
        return res.status(400).send({});
      }
      const prod = {
        id: dB.products.length + 1,
        name: req.body.name,
        purchPrice: req.body.purchPrice,
        salePrice: req.body.salePrice,
        category: req.body.category
      };
      dB.products.push(prod);
      fs.writeFile(dirPath, JSON.stringify(dB), (error, data) => {
        if (error) {
          console.log(error);
          return;
        }
        res.status(200).send({
          message: "success"
        });
      });
    });
  }

  addCategory(req, res, next) {
    fs.readFile(dirPath, (error, data) => {
      if (error) {
        console.log(error);
        return;
      }
      const dB = JSON.parse(data);
      if (!req.body.name) {
        return res.status(400).send({});
      }
      const category = {
        id: dB.categories.length + 1,
        name: req.body.name
      };
      dB.categories.push(category);
      fs.writeFile(dirPath, JSON.stringify(dB), (error, data) => {
        if (error) {
          console.log(error);
          return;
        }
        res.status(200).send({
          message: "success"
        });
      });
    });
  }

  removeProduct(req, res, next) {
    fs.readFile(dirPath, (error, data) => {
      if (error) {
        console.log(error);
        return;
      }
      const dB = JSON.parse(data);
      dB.products = dB.products.filter(item => {
        return Number(item.id) !== Number(req.params.id);
      });
      fs.writeFile(dirPath, JSON.stringify(dB), (error, data) => {
        if (error) {
          console.log(error);
          return;
        }
        res.status(200).send({
          message: "success"
        });
      });
    });
  }
  removeCategory(req, res, next) {
    fs.readFile(dirPath, (error, data) => {
      if (error) {
        console.log(error);
        return;
      }
      const dB = JSON.parse(data);
      dB.categories = dB.categories.filter(item => {
        return Number(item.id) !== Number(req.params.id);
      });
      fs.writeFile(dirPath, JSON.stringify(dB), (error, data) => {
        if (error) {
          console.log(error);
          return;
        }
        res.status(200).send({
          message: "success"
        });
      });
    });
  }
}

const controller = new Controller();
export default controller;
