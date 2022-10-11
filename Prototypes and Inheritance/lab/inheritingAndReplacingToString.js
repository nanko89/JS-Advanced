function toStringExtension() {
  class Person {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }

    toString() {
      return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
    }
  }

  class Teacher extends Person {
    constructor(teacherName, teacherEmail, subject) {
      super(teacherName, teacherEmail);
      this.subject = subject;
    }

    toString() {
      return `${super.toString().slice(0, -1)}, subject: ${this.subject})`;
    }
  }

  class Student extends Person {
    constructor(studentName, studentEmail, course) {
      super(studentName, studentEmail);
      this.course = course;
    }

    toString() {
      return `${super.toString().slice(0, -1)}, course: ${this.course})`;
    }
  }

  return {
    Person,
    Teacher,
    Student,
  };
}
