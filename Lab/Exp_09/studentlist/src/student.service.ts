import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students = [
    { name: 'Sakshi Magdum', age: 21, course: 'CSE-AIML' },
    { name: 'Pooja Magdum', age: 23, course: 'IT' },
    { name: 'Rasila khade', age: 21, course: 'Textile' },
    { name: 'Shweta Gudase', age: 20, course: 'AIDS' },
    { name: 'Pratiksha Gadade', age: 21, course: 'CSE' },
    { name: 'Anuja Khandale', age: 22, course: 'Civil' },
  ];

  getStudents() {
    return this.students;
  }
}
