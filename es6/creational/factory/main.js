let factory = require("./factoryRepo");

let task1 = factory.getRepo("task", 1, "Do my Homework");

// Get and save task from factory
task1.get();
task1.save();

console.log(task1);

let project1 = factory.getRepo("project", 1, "Cristianismo Feliz");
// Get and save project from factory
project1.get();
project1.save();
console.log(project1);
