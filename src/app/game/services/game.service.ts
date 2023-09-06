import { Injectable } from '@angular/core';
import { QuestionType } from '../game.interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GameService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  updateLevel(data: { studentId: number, level: number }) {
    return this.http.put(`${this.apiUrl}/class/updateLevel`, data);
  }
}
