var Task = require("../constructor/class");
var repoFactory = require("./repoFactory");

var task1 = new Task(repoFactory.getRepo("task").get(1));
var task2 = new Task(repoFactory.getRepo("task").get(2));

var user = repoFactory.getRepo("user").get(1);
var project = repoFactory.getRepo("project").get(1);

user.name = "Ulises";
project.name = "Seniority";

task1.user = user;
task2.project = project;

console.log(task1);
console.log(task2);
task1.save();
