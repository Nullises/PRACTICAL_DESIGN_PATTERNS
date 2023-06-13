const TaskService = require("./taskService");
// This is the Façade (IIFE function)
const TaskServiceWrapper = (() => {
  var completeAndNotify = function (myTask) {
    TaskService.complete(myTask);

    if (myTask.completed) {
      TaskService.setCompleteDate(myTask);
      TaskService.notifyCompletion(myTask, myTask.user);
      TaskService.save(myTask);
    }
  };
  return {
    completeAndNotify: completeAndNotify,
  };
})();

module.exports = TaskServiceWrapper;
