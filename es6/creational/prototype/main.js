let Task = require("./class");

let task1 = new Task("create a demo for constructor pattern");
let task2 = new Task("create a demo for module pattern");
let task3 = new Task("create a demo for singleton pattern");
let task4 = new Task("create a demo for prototype pattern");

task1.complete();

task2.save();
task3.save();
task4.save();
