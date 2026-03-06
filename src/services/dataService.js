import CategoryModel from "../lib/models/CategoryModel.js";
import PersonModel from "../lib/models/PersonModel.js";
import StoryModel from "../lib/models/StoryModel.js";

/*
  Service layer.
  Components call these functions instead of calling Parse directly.
*/

// Load categories
export async function getCategories() {
  return await CategoryModel.getAll();
}

// Load leaders and group them
export async function getLeaders() {
  const people = await PersonModel.getAll();
  return PersonModel.groupByGender(people);
}

// Load one leader profile
export async function getLeaderById(personId) {
  return await PersonModel.getById(personId);
}

// Load related stories
export async function getStoriesByPersonId(personId) {
  return await StoryModel.getByPersonId(personId);
}
