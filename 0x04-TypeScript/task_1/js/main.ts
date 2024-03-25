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


const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);
