/**
 * Teacher interface with the following attributes:
 * - firstName(string) and lastName(string). These two attributes should only be modifiable when a Teacher is first initialized
 * - fullTimeEmployee(boolean) this attribute should always be defined
 * - yearsOfExperience(number) this attribute is optional
 * - location(string) this attribute should always be defined
 */

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  /**
   * index signature: Creating possibility to add any attribute to the Object like contract(boolean)
   * without specifying the name of the attribute
  */
  [key: string]: any;
}

// Extending the teacher interface
interface Directors extends Teacher {
  numberOfReports: number;
}

// Interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implementation of the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const initial = firstName.charAt(0); // Get the first letter of the firstName
  return `${initial}. ${lastName}`; // Concatenate the initial and lastName with a dot
};

// writing a student class

// Interface describing the constructor of StudentClass
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Interface describing the StudentClass
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Implementation of the StudentClass
class StudentClassImpl implements StudentClass {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this._firstName;
  }
}
