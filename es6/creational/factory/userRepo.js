class UserRepository {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  get() {
    console.log("Getting user " + this.id);
    return {
      id: this.id,
      name: "new user from DB: " + this.name,
    };
  }

  save() {
    console.log("Saving user " + this.id + ":" + this.name + " to the DB");
  }
}

module.exports = UserRepository;
