
//Q1Create a class called Person with three properties called firstName, lastName and age. Include a constructor that assigns these values
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}
let me = new Person ("Laks", "Gov", 30);
console.log(me);

//Q2Create a method in person called getInfo that takes no parameters and returns information about the name and age of the person.
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getInfo () {
        return `${this.firstName} ${this.lastName}`
    }
}
let me = new Person("Laks", "Gov", 30);
console.log(me.getInfo());

//Q3Create a class called Student that extends Person. Student should have a property called grades that should be an array of numbers that 
// represent their mark out of 100 for a series of tests
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getInfo () {
        return `${this.firstName} ${this.lastName}`
    }
}


class Student extends Person {
constructor (firstName, lastName, age,grades){
super(firstName, lastName, age);
    this.grades = grades;
}
}
let stud1 = new Student ("Rex","pop", 34, [78,67,89,90,89]);
console.log(stud1);




// Q4.Create a method inside student that calculates their average grade

class Student {
    constructor(grade) {
        this.grade = grade;
    }
    calculateGrade () {
   let totalGrade = 0;
   for (let i = 0; i < this.grade.length; i++) {
       totalGrade += this.grade[i];
       
   } return totalGrade / this.grade.length;
    }
}
let student1 = new Student("Lak", "Gov", 20, [85, 88, 78, 70]);
console.log(student1.calculateGrade());

//Q5.Override the getInfo method for Student so that it also displays the average grade of the student. Make sure to include a call to 
// super.getInfo
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getInfo () {
        return `${this.firstName} ${this.lastName}`
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade) {
        super(firstName, lastName, age);
        this.grade = grade;
    }
    calculateGrade () {
   let totalGrade = 0;
   for (let i = 0; i < this.grade.length; i++) {
       totalGrade += this.grade[i];
       
   } return totalGrade / this.grade.length;
    }
  getInfo (){
      return `${super.getInfo()} and their average grade is ${this.calculateGrade()}`
  }  
}
let student1 = new Student("Lak", "Gov", 20, [85, 88, 78, 70]);
console.log(student1.getInfo());



//Q6. Create a class called Teacher that extends Person. Teacher should have a property called students 
//that should be an array of Student objects representing the students in their class

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getInfo () {
        return `${this.firstName} ${this.lastName}`
    }
}

class Teacher extends Person {
constructor (firstName, lastName, age, students){
    super(firstName, lastName, age);
        this.students = students;
}
}
//Q7 Create a method inside Teacher that calculates the average grade across all of their students and returns it as a number.


class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getInfo () {
        return `${this.firstName} ${this.lastName}`
    }
}

class Teacher extends Person {
    constructor (firstName, lastName, age, students){
        super(firstName, lastName, age);
            this.students = students;
    }
    getAvgGrade(){
        let totalGrade = 0;
        for (let i = 0; i < this.students.length; i++) {
            totalGrade = totalGrade + this.students[i].grade;   
        }
        return totalGrade / this.students.length;

    }
}
let studentArray = [{name: "Rex", grade: 60},{name: "Dom", grade: 80},{name: "Tom", grade: 70}];
let teacher = new Teacher ("Peter", "More", 45, studentArray);
console.log(teacher.getAvgGrade());

// Q8 Override the getInfo method for Teacher so that it also displays the average grade of their students. Make sure to include a call 
//to super.getInfo
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getInfo () {
        return `${this.firstName} ${this.lastName}`
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade) {
        super(firstName, lastName, age);
        this.grade = grade;
    }
    getStudentAvg () {
        let totalGrade = 0;
        for (let i = 0; i < this.grade.length; i++) {
            totalGrade += this.grade[i];
            
        } 
        return totalGrade / this.grade.length;
    }

    getInfo (){
        return `${super.getInfo()} and their average grade is ${this.getStudentAvg()}`
    }  
}

class Teacher extends Person{
    constructor (firstName, lastName, age, students){
        super(firstName, lastName, age);
        this.students = students;
    }
    getTeacherAvg(){
        let totalGrade = 0;
        for (let i = 0; i < this.students.length; i++) {
            totalGrade = totalGrade + this.students[i].getStudentAvg();   
        }
        return totalGrade / this.students.length;

    }
    getInfo(){
        return `${super.getInfo()} avarage student grade is ${this.getTeacherAvg()}`
    }
}
let studentArray = [new Student("Luke", "Gopi", 20, [85, 88, 78, 70]),
                    new Student("Rex", "God", 26, [83, 84, 56, 87]),
                    new Student("Dom", "rov", 23, [56, 65, 76, 87]),
                    new Student("Tom", "Dev", 25, [67, 76, 45, 67])]
let teacher = new Teacher("Peter", "More", 45, studentArray);
console.log(teacher.getTeacherAvg());
console.log(teacher.getInfo());
