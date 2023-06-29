class Repo {
  constructor(task) {
    this.task = task;
  }
  save() {
    this.called++;
    console.log("Saving " + this.task);
  }
}

module.exports = Repo;
