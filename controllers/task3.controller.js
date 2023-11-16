const controller = {};
controller.show = (request, response) => {
  let category = request.query.category ? request.query.category : "";
  let { products, categories } = require("../data");
  if (category) {
    products = products.filter((i) => i.category == category);
  }
  response.render("task3", { products, categories });
};
module.exports = controller;
