const controller = {};
controller.show = (request, response) => {
  let { zodiacs } = require("../data");
  response.locals.zodiacs = zodiacs;
  response.render("task4");
};

controller.showDetail = (request, response) => {
  let { n } = request.params;
  if (n) {
    let { zodiacs } = require("../data");
    let zodiac = zodiacs.find((i) => i.name == n);
    if (zodiac) {
      response.render("task4-detail", {
        zodiac,
      });
    } else response.redirect("/task4");
  } else {
    response.redirect("/task4");
  }
};
module.exports = controller;
