import { Parse } from "../parseClient.js";
import BaseModel from "./BaseModel.js";

export default class PersonModel extends BaseModel {
  static className = "Person";

  static async getAll() {
    const Person = Parse.Object.extend(this.className);
    const query = new Parse.Query(Person);

    query.ascending("name");
    query.include("category");

    const results = await query.find();

    return results.map((item) => {
      const category = item.get("category");

      return {
        ...this.toPlain(item, [
          "slug",
          "name",
          "summary",
          "early",
          "impact",
          "legacy",
          "achievements",
          "group",
        ]),
        category: category
          ? {
              id: category.id,
              title: category.get("title"),
              desc: category.get("desc"),
            }
          : null,
      };
    });
  }

  static async getById(personId) {
    const Person = Parse.Object.extend(this.className);
    const query = new Parse.Query(Person);
    query.include("category");

    const item = await query.get(personId);
    const category = item.get("category");

    return {
      ...this.toPlain(item, [
        "slug",
        "name",
        "summary",
        "early",
        "impact",
        "legacy",
        "achievements",
        "group",
      ]),
      category: category
        ? {
            id: category.id,
            title: category.get("title"),
            desc: category.get("desc"),
          }
        : null,
    };
  }

  static async getByCategoryId(categoryId) {
    const Person = Parse.Object.extend(this.className);
    const query = new Parse.Query(Person);

    query.equalTo("category", this.toPointer("Category", categoryId));
    query.ascending("name");

    const results = await query.find();

    return results.map((item) =>
      this.toPlain(item, [
        "slug",
        "name",
        "summary",
        "early",
        "impact",
        "legacy",
        "achievements",
        "group",
      ])
    );
  }

  static groupByGender(people = []) {
    return {
      men: people.filter((person) => person.group === "men"),
      women: people.filter((person) => person.group === "women"),
    };
  }
}
