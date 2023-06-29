class ProjectRepository {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  get() {
    console.log("Getting project " + this.id);
    return {
      id: this.id,
      name: "new project from DB: " + this.name,
    };
  }

  save() {
    console.log("Saving project " + this.id + ":" + this.name + " to the DB");
  }
}

module.exports = ProjectRepository;
