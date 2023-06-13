var repo = function () {
  var get = function (id) {
    console.log("Getting project " + id);
    return {
      id: id,
      name: "new project from DB",
    };
  };
  var save = function (project) {
    console.log("Saving " + project.id + ":" + project.name + " to the DB");
  };
  return {
    get: get,
    save: save,
  };
};

module.exports = repo();
