import { Parse } from "../parseClient.js";
import BaseModel from "./BaseModel.js";

export default class CategoryModel extends BaseModel {
  static className = "Category";

  static async getAll() {
    const Category = Parse.Object.extend(this.className);
    const query = new Parse.Query(Category);
    query.ascending("title");

    const results = await query.find();
    return results.map((item) => this.toPlain(item, ["title", "desc"]));
  }

  static async getById(categoryId) {
    const Category = Parse.Object.extend(this.className);
    const query = new Parse.Query(Category);
    const result = await query.get(categoryId);

    return this.toPlain(result, ["title", "desc"]);
  }
}
