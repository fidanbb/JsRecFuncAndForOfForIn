"use strict";

//2) Icerisinde name, surname, age, email olan bir nece student objectleriniz var. Ashagida elave etdiklerimi functionlar sekilinde yazin,      functionlar objectlerden ibaret array qebul edecek.
// 1) Yashi 18-25 araliginda olan telebelerin sayi.
// 2) Emailinde "c" herfi olan studentlerin sayi.

function filter(students) {
  for (const student of students) {
    if (student.age > 18 && student.age < 25) {
      for (const key in student) {
        console.log(key + "---" + student[key]);
      }
    }
  }
}

function count(students) {
  let count = 0;
  for (const student of students) {
    if (student.email) {
      let email = student.email;
      for (const key in email) {
        if (email[key] === "c") {
          count++;
          break;
        }
      }
    }
  }
  console.log(count);
}

let stu1 = {
  name: "Fidan",
  surname: "Bashirova",
  age: 22,
  email: "fidan@gmail.com",
};

let stu2 = {
  name: "Nigar",
  surname: "Adilova",
  age: 30,
  email: "nigar@gmail.com",
};

let stu3 = {
  name: "Eli",
  surname: "Eliyev",
  age: 17,
  email: "eli@gmail.com",
};

let stu4 = {
  name: "Rustem",
  surname: "Rustemov",
  age: 24,
  email: "fidan@gmail.com",
};

let stu5 = {
  name: "Zehra",
  surname: "Babayev",
  age: 23,
  email: "zehra@gmail.cccom",
};

let students = [stu1, stu2, stu3, stu4, stu5];

// filter(students);
count(students);
