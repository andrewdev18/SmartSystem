import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/auth/user.interface';
import { environment } from 'src/environments/environment';
import { Class } from '../classes.interface';

@Injectable({
  providedIn: 'root'
})


export class ClassService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getTeacherClasses(teacherId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/class/teacher/${teacherId.toString()}`);
  }

  getStudentClass(classId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/class/${classId.toString()}`);
  }

  getStudents(classId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/class/students/${classId.toString()}`);
  }

  getClassById(classId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/class/${classId.toString()}`);
  }

  addClass(targetClass: Class): Observable<any> {
    return this.http.post(`${this.apiUrl}/class/register`, targetClass);
  }

  updateStudentClass(studentId: number, classId: number) {
    return this.http.put(`${this.apiUrl}/class/updateStudent`, { studentId: studentId, classId: classId });
  }
}
