var Task = require("./task");

var notificationService = function () {
  var message = "Notifying ";
  this.update = function (task) {
    console.log(message + task.user + " for task " + task.name);
  };
};

var loggingService = function () {
  var message = "Logging ";
  this.update = function (task) {
    console.log(message + task.user + " for task " + task.name);
  };
};

var auditingService = function () {
  var message = "Auditing ";
  this.update = function (task) {
    console.log(message + task.user + " for task " + task.name);
  };
};

// Observer List: A simple array
function ObserverList() {
  this.observerList = [];
}

// Custom Observers functions
ObserverList.prototype.add = function (obj) {
  return this.observerList.push(obj);
};

ObserverList.prototype.get = function (index) {
  if (index > -1 && index < this.observerList.length) {
    return this.observerList[index];
  }
};

ObserverList.prototype.count = function () {
  return this.observerList.length;
};

ObserverList.prototype.indexOf = function (obj, startIndex) {
  var i = startIndex;
  while (i < this.observerList.length) {
    if (this.observerList[i] === obj) {
      return i;
    }
    i++;
  }
  return -1;
};

ObserverList.prototype.removeAt = function (index) {
  this.observerList.splice(index, 1);
};

// Observable Task
var ObservableTask = function (data) {
  // Calling to a Task object and passing data
  Task.call(this, data);
  this.observers = new ObserverList();
};

// Add Observer: Observer is added to Observers list
ObservableTask.prototype.addObserver = function (observer) {
  this.observers.add(observer);
};

// Nofify: Notify when an Observer is added
ObservableTask.prototype.notify = function (context) {
  var observerCount = this.observers.count();
  for (var i = 0; i < observerCount; i++) {
    this.observers.get(i)(context);
  }
};

// Save: Save observer
ObservableTask.prototype.save = function () {
  // Notify to user
  this.notify(this);
  // Calling to an existing function (save)
  Task.prototype.save.call(this);
};

// removeObserver: Remove observer
ObservableTask.prototype.removeObserver = function (observer) {
  this.observers.removeAt(this.observers.indexOf(observer, 0));
};

// Creating a new Task Object
// var task1 = new Task({
//   name: "create a demo for constructors",
//   user: "Jon",
// });

// Creating a new Observable Task Object
var task1 = new ObservableTask({
  name: "create a demo for constructors",
  user: "Ulises",
});

var notif = new notificationService();
var log = new loggingService();
var audit = new auditingService();

// Adding observers to our task
task1.addObserver(notif.update);
task1.addObserver(log.update);
task1.addObserver(audit.update);
task1.save();
// Removing observers from our task
task1.removeObserver(notif, task1);
task1.removeObserver(log, task1);
task1.save();
task1.removeObserver(audit, task1);
task1.save();
