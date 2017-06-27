const app = "I don't do much."

function callback(totalPrice, product) {
  if (product.price < 7) {
    return totalPrice + product.price;
  }
  return totalPrice;
}

function reduce(collection, callback, initialValue) {
  let result = initialValue;

  collection.forEach((product, index) => {
    result = callback(result, product, index, collection);
  });

  return result;
}
