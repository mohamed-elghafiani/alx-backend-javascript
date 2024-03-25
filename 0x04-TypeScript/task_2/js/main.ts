/**
 * Create the DirectorInterface interface with the 3 expected methods:
 * - @workFromHome() returning a string
 * - @getCoffeeBreak() returning a string
 * - @workDirectorTasks() returning a string
 */
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

/**
 * Create the TeacherInterface interface with the 3 expected methods:
 * - @workFromHome() returning a string
 * - @getCoffeeBreak() returning a string
 * - @workTeacherTasks() returning a string
 */
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Create the Director class that impliment the DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Create the Teacher class that impliments the TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

/**
 * createEmployee - a function with the following requirements:
 * - It can return either a Director or a Teacher instance
 * - It accepts 1 arguments:
 *   - salary(either number or string)
 * - if salary is a number and less than 500 - It should return a new Teacher. Otherwise it should return a Director
 */
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}
