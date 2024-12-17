import { Injectable } from '@angular/core';
// Firebase
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Importar 'map'
import { DocumentChangeAction } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private firestore: AngularFirestore) {}

  // Método para agregar datos
  addItem(collectionName: string, data: any): Promise<any> {
    return this.firestore.collection(collectionName).add(data);
  }

  // Método para obtener datos
  getData(collectionName: string): Observable<any[]> {
    return this.firestore
      .collection(collectionName)
      .snapshotChanges()
      .pipe(
        map((actions: DocumentChangeAction<any>[]) =>
          actions.map((a: DocumentChangeAction<any>) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  // Método para modificar datos
  updateItem(collectionName: string, documentId: string, newData: any): Promise<void> {
    return this.firestore.collection(collectionName).doc(documentId).update(newData);
  }

  // Método para eliminar datos
  deleteItem(collectionName: string, documentId: string): Promise<void> {
    return this.firestore.collection(collectionName).doc(documentId).delete();
  }
}
