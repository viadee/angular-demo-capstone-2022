import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';

export interface TodoItem {
  id: string;
  description: string;
  done: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoCollection: AngularFirestoreCollection<TodoItem>;

  constructor(private firestore: AngularFirestore) {
    this.todoCollection = this.firestore.collection<TodoItem>('todo-items');
   }

  list(): Observable<TodoItem[]> {
    return this.todoCollection.valueChanges({ idField: "id" });
  }

  add(item: TodoItem) {
    this.todoCollection.add(item);
  }

  async delete(id: string) {
    await this.firestore.doc(`todo-items/${id}`).delete();
  }

  get(id: string): Observable<TodoItem | undefined> {
    return this.firestore.doc<TodoItem>(`todo-item/${id}`).get().pipe(
      map(documentSnapshot => documentSnapshot.data())
    );
  }
}
