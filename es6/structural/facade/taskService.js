// Services (IIFE function)
const TaskService = (() => {
  return {
    complete: (task) => {
      task.completed = true;
      console.log("completing task:" + task.name);
    },
    setCompleteDate: (task) => {
      task.completedDate = new Date();
      console.log(task.name + " completed on: " + task.completedDate);
    },
    notifyCompletion: (task, user) => {
      console.log("Notifying: " + user + " of completion of " + task.name);
    },
    save: (task) => {
      console.log("saving Task: " + task.name);
    },
  };
})();

module.exports = TaskService;
