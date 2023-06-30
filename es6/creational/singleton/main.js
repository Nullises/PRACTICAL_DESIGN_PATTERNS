taskHandler = require("./handler");

taskHandler.save("New Task from Singleton");

// Calling not exposed methods by the singleton outputs an error
//taskHandler.message()