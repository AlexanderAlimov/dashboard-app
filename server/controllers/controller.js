import db from "../db/db";

class Controller {
  getCategories(req, res, next) {
    res.status(200).send({
      success: "true",
      message: "categories retrieved successfully",
      categories: db.categories
    });
  }

  getProducts(req, res, next) {
    res.status(200).send({
      success: "true",
      message: "products retrieved successfully",
      products: db.products
    });
  }
}

const controller = new Controller();

export default controller;
