class Repo {
  constructor(task) {
    this.task = task;
  }
  // This method will be exposed in the handler
  save() {
    console.log("Saving " + this.task);
  }
  // This method not
  health() {
    console.log("Healthcheck: OK");
  }
}

module.exports = Repo;
