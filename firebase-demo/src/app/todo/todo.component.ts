import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { TodoItem, TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements OnInit {

  todoItems: Observable<TodoItem[]> | undefined;

  newItemDescription = '';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoItems = this.todoService.list();
  }

  onSubmit() {
    this.todoService.add({
      description: this.newItemDescription,
      done: false,
      id: uuidv4(),
    });
    this.newItemDescription = '';
  }

  onDelete(id: string) {
    this.todoService.delete(id);
  }
}
