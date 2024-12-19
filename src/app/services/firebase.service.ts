import { Injectable } from '@angular/core';
// Firebase
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Importa AngularFireAuth para la autenticación
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Importar 'map'
import { DocumentChangeAction } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth  // Inyecta AngularFireAuth aquí
  ) {}

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

  // Método para cerrar sesión
  async cerrarSesion(): Promise<void> {
    try {
      await this.afAuth.signOut();  // Cierra la sesión con Firebase
      console.log('Sesión cerrada con éxito');
    } catch (error) {
      console.error('Error al cerrar sesión', error);
      throw error; // Lanza el error para ser manejado en el componente
    }
  }
}
