var repo = function () {
  var get = function (id) {
    console.log("Getting task " + id);
    return {
      id: id,
      name: "new task from DB",
    };
  };
  var save = function (task) {
    console.log("Saving " + task.id + ":" + task.name + " to the DB");
  };
  return {
    get: get,
    save: save,
  };
};

module.exports = repo();
