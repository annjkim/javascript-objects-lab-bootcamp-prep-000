var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign ({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = "value"
  return object
}

function deleteFromObjectByKey(object, key) {
  var newRecipes = {food1, food2}
  delete newReceipes[key]
  return newReceipes
}
