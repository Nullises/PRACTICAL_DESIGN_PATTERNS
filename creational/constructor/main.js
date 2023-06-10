var Task = require("./class");

// Construct a new Task from task Class
var task1 = new Task("create a demo for constructor pattern");
var task2 = new Task("create a demo for module pattern");
var task3 = new Task("create a demo for singleton pattern");
var task4 = new Task("create a demo for prototype pattern");

task1.complete();

task2.save();
task3.save();
task4.save();
