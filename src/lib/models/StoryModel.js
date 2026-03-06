import { Parse } from "../parseClient.js";
import BaseModel from "./BaseModel.js";

export default class StoryModel extends BaseModel {
  static className = "Story";

  static async getByPersonId(personId) {
    const Story = Parse.Object.extend(this.className);
    const query = new Parse.Query(Story);

    query.equalTo("person", this.toPointer("Person", personId));
    query.ascending("headline");

    const results = await query.find();
    return results.map((item) => this.toPlain(item, ["headline", "summary"]));
  }
}
