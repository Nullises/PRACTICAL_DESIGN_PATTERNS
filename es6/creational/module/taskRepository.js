const repo = () => {
  const get = (id) => {
    console.log("Getting task " + id);
    return {
      id: id,
      name: "new task from DB",
    };
  };
  const save = (task) => {
    console.log("Saving " + task.id + ":" + task.name + " to the DB");
  };
  return {
    get: get,
    save: save,
  };
};

module.exports = repo();
