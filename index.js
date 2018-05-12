var recipes = {
  maindish1 = "breakfast"
  maindish2 = "lunch"
  maindish3 = "dinner"
};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign ({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = "value"
  return object
}

function deleteFromObjectByKey(object, key) {
  delete recipes.maindish2
  return recipes
}

var meals = { breakfast: “oatmeal”, lunch: “turkey sandwich”, dinner: “steak and potatoes” };

   // the ‘delete’ operator returns ‘true’ if it has successfully
   // deleted, ‘false’ otherwise
   delete meals.dinner; // true

   meals;
   // returns { breakfast: “oatmeal”, lunch: “turkey sandwich” }