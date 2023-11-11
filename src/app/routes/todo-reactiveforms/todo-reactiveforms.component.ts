import { Component, inject } from '@angular/core';
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
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputCardComponent } from '../../shared/components/input-card/input-card.component';
import { CardSkeletonComponent } from '../../shared/components/card-skeleton/card-skeleton.component';

@Component({
  selector: 'app-todo-reactiveforms',
  standalone: true,
  templateUrl: './todo-reactiveforms.component.html',
  styleUrl: './todo-reactiveforms.component.scss',
  imports: [
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    NgFor,
    InputCardComponent,
    CardSkeletonComponent
  ],
})
export class TodoReactiveformsComponent {
  fb = inject(FormBuilder);
  todoForm: FormGroup = this.fb.group({
    todo: this.fb.array([]),
    done: this.fb.array([]),
  });

  get todoArray(): FormArray {
    return this.todoForm.get('todo') as FormArray;
  }

  get doneArray(): FormArray {
    return this.todoForm.get('done') as FormArray;
  }

  addTask(value: string) {
    this.todoArray.push(this.fb.control(value));
  }

  removeTask(index: number) {
    this.todoArray.removeAt(index);
  }

  removeDone(index: number) {
    this.doneArray.removeAt(index);
  }

  drop(event: CdkDragDrop<any[], any, any>, type: 'todo' | 'done') {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      console.log(
        event,
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
      if(type === 'todo') {
        this.doneArray.removeAt(event.previousIndex);
      } else {
        this.todoArray.removeAt(event.previousIndex);
      }
      console.log(
        event,
        'asdaasdas',
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    console.log('result', this.todoArray.value, this.doneArray.value);
  }
}
