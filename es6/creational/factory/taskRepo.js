class TaskRepository {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  get() {
    console.log("Getting task " + this.id);
    return {
      id: this.id,
      name: "new task from DB: " + this.name,
    };
  }

  save() {
    console.log("Saving task " + this.id + ":" + this.name + " to the DB");
  }
}

module.exports = TaskRepository;
