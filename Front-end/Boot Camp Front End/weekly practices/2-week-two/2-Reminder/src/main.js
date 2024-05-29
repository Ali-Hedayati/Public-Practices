// use this tasks to test your code
const tasks = require("./data.json");
const currentDate = "2024-01-15T18:00:00Z";

function reminder(tasks, currentDate) {
  let now = new Date(currentDate);
  var date1 = new Date(now);
  let old = new Date(tasks[2]["date"]);
  var date2 = new Date(old);
  //   const dif = old.getTime() - now.getTime();
  const dif = date1 - date2;
  //   let diif = new Date(dif).toString();
  let a = new Date(dif).toISOString();
  let b = new Date(a);
  console.log(b.getHours());
}

module.exports = reminder;
reminder(tasks, currentDate);
//2024-01-29T06:00:00Z
