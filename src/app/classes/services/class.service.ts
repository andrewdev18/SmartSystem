import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc } from "@angular/fire/firestore";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ClassService {
  
  constructor(private firestore: Firestore) { 
  }
  
  getClasses(): Observable<any> {
    const classes = collection(this.firestore, 'classes');
    return collectionData(classes, {idField: 'id'}) as Observable<any>;
  }

  addClass() {

  }
}
