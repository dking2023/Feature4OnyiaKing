import { Parse } from "../parseClient.js";

// Shared helper methods for Parse models.
export default class BaseModel {
  static toPointer(className, objectId) {
    const Obj = Parse.Object.extend(className);
    const pointer = new Obj();
    pointer.id = objectId;
    return pointer;
  }

  static toPlain(parseObj, fields = []) {
    const plain = {
      id: parseObj.id,
      createdAt: parseObj.createdAt,
      updatedAt: parseObj.updatedAt,
    };

    fields.forEach((field) => {
      plain[field] = parseObj.get(field);
    });

    return plain;
  }
}
