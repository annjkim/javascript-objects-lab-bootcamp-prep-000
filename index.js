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