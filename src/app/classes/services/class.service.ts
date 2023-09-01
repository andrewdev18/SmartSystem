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
    return this.http.get(`${this.apiUrl}/classes?teacher=${teacherId.toString()}`);
  }
  
  getStudentClass(classId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/classes?id=${classId.toString()}`);
  }

  getStudents(classId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/users?class=${classId.toString()}`);
  }

  getClassById(classId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/classes?id=${classId.toString()}`);
  }
  
  addClass(targetClass: Class): Observable<any> {
    return this.http.post(`${this.apiUrl}/classes`, targetClass);
  }

  updateStudentClass(student: User) {
    return this.http.put(`${this.apiUrl}/users?id=${student.id}`, student);
  }
}
