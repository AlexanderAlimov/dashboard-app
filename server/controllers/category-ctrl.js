import Product from "../models/product.model";
import Category from "../models/category.model";
import { handleError, handleSuccess } from "../utils/utils";

class CategoryController {
  getCategories(req, res, next) {
    Category.find({})
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

  removeCategory(req, res, next) {
    const id = req.params.id;
    let categoryId;
    Category.findOne({ name: "Without Category" })
      .then(category => {
        categoryId = category._id;
        return Product.updateMany({ category: id }, { category: categoryId });
      })
      .then(() => {
        return Category.findByIdAndRemove(id);
      })
      .then(({ _id }) => _id)
      .then(handleSuccess(res))
      .catch(handleError(res));
  }
}

const categoryController = new CategoryController();
export default categoryController;
