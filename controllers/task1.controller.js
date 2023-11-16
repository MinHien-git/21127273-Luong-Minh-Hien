const controller = {};
controller.show = (request, response) => {
  let { emotions } = require("../data");
  response.locals.emotions = emotions;
  response.render("task1");
};
module.exports = controller;
