let Repo = require("./Repo");

const taskHandler = () => {
  return {
    save: (task) => {
      let instance = new Repo(task);
      return instance.save();
    },
  };
};

module.exports = taskHandler();
