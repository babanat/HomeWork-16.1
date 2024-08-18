function createStudent(name, surname, birthYear) {
  let ratings = [];
  let attendance = new Array(25).fill(null);
  function getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  }
  function addRatings(rating) {
    ratings.push(rating);
  }
  function getAverageRating() {
    if (ratings.length === 0) return 0;
    const sum = ratings.reduce((acc, rating) => acc + rating, 0);
    return sum / ratings.length;
  }
  function present() {
    const index = attendance.indexOf(null);
    if (index !== -1) {
      attendance[index] = true;
    }
  }
  function absent() {
    const index = attendance.indexOf(null);
    if (index !== -1) {
      attendance[index] = false;
    }
  }
  function getAverageAttendance() {
    const attendedClasses = attendance.filter(
      (elemArr) => elemArr === true
    ).length;
    const totalClasses = attendance.filter(
      (elemArr) => elemArr !== null
    ).length;
    if (totalClasses === 0) return 0;
    return attendedClasses / totalClasses;
  }
  function summary() {
    const averageRating = getAverageRating();
    const averageAttendance = getAverageAttendance();

    if (averageRating > 90 && averageAttendance > 0.9) {
      return "Молодец!";
    } else if (averageRating > 90 || averageAttendance > 0.9) {
      return "Хорошо, но можно лучше";
    } else {
      return "Редиска!";
    }
  }

  return {
    name,
    surname,
    birthYear,
    getAge,
    addRatings,
    getAverageRating,
    present,
    absent,
    getAverageAttendance,
    summary,
  };
}

const student1 = createStudent("Alex", "Braun", 2002);
const student2 = createStudent("James", "Whitaker", 2004);
const student3 = createStudent("Julia", "Bird", 1998);

student1.addRatings(95);
student1.addRatings(88);
student1.addRatings(92);

student2.addRatings(78);
student2.addRatings(82);
student2.addRatings(85);

student3.addRatings(90);
student3.addRatings(89);
student3.addRatings(93);

student1.present();
student1.present();
student1.absent();
student1.present();
student1.absent();

student2.present();
student2.absent();
student2.absent();
student2.present();
student2.absent();

student3.present();
student3.present();
student3.present();
student3.present();
student3.present();

console.log(
  student1.name,
  student1.getAge(),
  student1.getAverageRating(),
  student1.getAverageAttendance(),
  student1.summary()
);
console.log(
  student2.name,
  student2.getAge(),
  student2.getAverageRating(),
  student2.getAverageAttendance(),
  student2.summary()
);
console.log(
  student3.name,
  student3.getAge(),
  student3.getAverageRating(),
  student3.getAverageAttendance(),
  student3.summary()
);
