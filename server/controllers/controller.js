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

  getFilterProducts(req, res, next) {
    const id = req.query.id;
    const filterProducts = db.products.filter(item => {
      return Number(item.categoryId) === Number(id);
    });
    res.status(200).send({
      success: "true",
      message: "products filter successfully",
      products: filterProducts
    });
  }
}

const controller = new Controller();

export default controller;
