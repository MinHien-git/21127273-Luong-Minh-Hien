const controller = {};
controller.show = (request, response) => {
  let salary = request.query.salary ? parseFloat(request.query.salary) : 0;
  let jar55 = (salary * 55) / 100;
  let jar10 = (salary * 10) / 100;
  let jar5 = (salary * 5) / 100;
  response.render("task2", { jar55, jar10, jar5 });
};
module.exports = controller;
