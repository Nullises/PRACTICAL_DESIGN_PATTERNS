var repo = function () {
  var get = function (id) {
    console.log("Getting user " + id);
    return {
      id: id,
      name: "new user from DB",
    };
  };
  var save = function (user) {
    console.log("Saving  " + user.id + ":" + user.name + " to the DB");
  };
  return {
    get: get,
    save: save,
  };
};

module.exports = repo();
