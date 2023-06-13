class Task {
  name: string;
  completed: boolean;

  constructor(name: string) {
    this.name = name;
    this.completed = false;
  }

  @deprecated
  complete() {
    console.log("completing task: " + this.name);
    this.completed = true;
  }

  save() {
    console.log("saving Task: " + this.name);
  }
}

// We create a decorator to deprecate a method
function deprecated(originalMethod: any, _context: any) {
  function replacementMethod(this: any, ...args: any[]) {
    console.log(`The: ${originalMethod.name}() method is deprecated...`);
    //const result = originalMethod.call(this, ...args);
    //return result;
  }
  return replacementMethod;
}

let myTask = new Task("Make a Decorator in ES6");
// Trying to call method decorated
myTask.complete();
myTask.save();
