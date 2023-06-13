var repo = {
  tasks: {},
  commands: [],
  get: function (id) {
    console.log("Getting task " + id);
    return {
      id: id,
      name: "new task from DB",
    };
  },
  save: function (task) {
    repo.tasks[task.id] = task;
    console.log("Saving " + task.name + " to the DB");
  },
  replay: function () {
    for (var i = 0; i < repo.commands.length; i++) {
      var command = repo.commands[i];
      repo.executeNoLog(command.name, command.obj);
    }
  },
};

// Creating function that contents our Command
repo.execute = function (name) {
  var args = Array.prototype.slice.call(arguments, 1);

  // Commands.push
  repo.commands.push({
    name: name,
    obj: args[0],
  });

  if (repo[name]) {
    return repo[name].apply(repo, args);
  }
  return false;
};

repo.executeNoLog = function (name) {
  var args = Array.prototype.slice.call(arguments, 1);

  if (repo[name]) {
    return repo[name].apply(repo, args);
  }
  return false;
};

// Execute our command
repo.execute("save", {
  id: 1,
  name: "Task 1",
  completed: false,
});
repo.execute("save", {
  id: 2,
  name: "Task 2",
  completed: false,
});

repo.execute("save", {
  id: 3,
  name: "Task 3",
  completed: false,
});

repo.execute("save", {
  id: 4,
  name: "Task 4",
  completed: false,
});
console.log(repo.tasks);
repo.tasks = {};
console.log(repo.tasks);
// Recreates again
repo.replay();
console.log(repo.tasks);
