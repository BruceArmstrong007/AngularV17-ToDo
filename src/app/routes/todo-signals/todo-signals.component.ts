import { ChangeDetectionStrategy, Component, WritableSignal, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { MatListModule } from '@angular/material/list';
import { NgFor } from '@angular/common';
import { InputCardComponent } from '../../shared/components/input-card/input-card.component';
import { CardSkeletonComponent } from '../../shared/components/card-skeleton/card-skeleton.component';
@Component({
  selector: 'app-todo-signals',
  standalone: true,
  imports: [
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    NgFor,
    InputCardComponent,
    CardSkeletonComponent
  ],
  templateUrl: './todo-signals.component.html',
  styleUrl: './todo-signals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoSignalsComponent {
  todo: WritableSignal<string[]> = signal([]);
  done: WritableSignal<string[]> = signal([]);

  addTask(value: string) {
    this.todo.update((todo) => {
      todo.push(value);
      return todo;
    });
  }

  removeTask(item: number) {
    this.todo.update((todo) => {
      todo.splice(item, 1);
      return todo;
    })
  }

  removeDone(item: number) {
    this.done.update((done) => {
      done.splice(item, 1);
      return done;
    })  
  }

  drop(event: CdkDragDrop<any[], any, any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      console.log(
        event,
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      console.log(
        event,
        'asdaasdas',
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    console.log(this.todo(), this.done());
  }

}
