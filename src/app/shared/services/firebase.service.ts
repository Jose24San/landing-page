import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private betaList: AngularFirestoreCollection;
  private emailList: AngularFirestoreCollection;
  items: Observable<any>;

  constructor(private firestore: AngularFirestore) {
    this.betaList = firestore.collection('betaList');
    this.emailList = firestore.collection('emailList');
    this.items = this.betaList.valueChanges();
  }

  addToBetaList(item, callback) {
    this.betaList.add(item).then((docRef) => {
      callback('success', docRef);
    }).catch((error) => {
      callback('error', error);
    });
  }

  addToEmailList(item, callback) {
    this.emailList.add(item).then((success) => {
      callback('success', success);
    }).catch((error) => {
      callback('error', error);
    });
  }
}
