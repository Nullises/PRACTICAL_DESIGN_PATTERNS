class Task {
  constructor(data) {
    this.flyweight = FlyweightFactory.get(
      data.project,
      data.priority,
      data.user,
      data.completed
    );
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
  }
}

class Flyweight {
  constructor(project, priority, user, completed) {
    this.priority = priority;
    this.project = project;
    this.user = user;
    this.completed = completed;
  }
}

function TaskCollection() {
  let tasks = {};
  let count = 0;
  let add = (data) => {
    tasks[data.name] = new Task(data);
    count++;
  };
  let get = (name) => {
    return tasks[name];
  };
  let getCount = () => {
    return count;
  };
  return {
    add: add,
    get: get,
    getCount: getCount,
  };
}

const FlyweightFactory = (function () {
  let flyweights = {};
  let get = (project, priority, user, completed) => {
    if (!flyweights[project + priority + user + completed]) {
      flyweights[project + priority + user + completed] = new Flyweight(
        project,
        priority,
        user,
        completed
      );
    }
    return flyweights[(project, priority, user, completed)];
  };
  let getCount = () => {
    let count = 0;
    for (let f in flyweights) count++;
    return count;
  };
  return {
    get: get,
    getCount: getCount,
  };
})();

let tasks = new TaskCollection();

const projects = ["Cristianismo Feliz", "Febris", "Seniority"];
const priorities = [1, 2, 3, 4, 5];
const users = ["Ulises", "UlisesVargas", "Uli"];
const completed = [true, false];

// Simulator of thousands of tasks
let initialMemory = process.memoryUsage().heapUsed;

for (let i = 0; i < 1000000; i++) {
  tasks.add({
    name: "task:" + i,
    priority: priorities[Math.floor(Math.random * 5)],
    project: projects[Math.floor(Math.random * 3)],
    user: users[Math.floor(Math.random * 3)],
    completed: completed[Math.floor(Math.random * 2)],
  });
}

let afterMemory = process.memoryUsage().heapUsed;
console.log("used memory: " + afterMemory / initialMemory / 1000000);
console.log("tasks: " + tasks.getCount());
console.log("flyweights: " + FlyweightFactory.getCount());
