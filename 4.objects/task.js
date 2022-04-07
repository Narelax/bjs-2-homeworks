function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
  if (this.marks === undefined) { 
    this.marks = [ ]; 
    this.marks.push(mark);
    } else {
      this.marks.push(mark);
    }
}

Student.prototype.addMarks = function(... mark) {
  this.marks = [ ];
  for (mark in this.marks) {
    this.marks.push(mark);
  } 
}

Student.prototype.getAverage = function() {
  let average;
  let marks;
  this.marks = [ ];
  this.marks.push(marks);
  for (marks in this.marks) {
    let sum = + marks;
    average = sum / this.marks.length;
  }
  console.log(average);
  return average;
}

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}