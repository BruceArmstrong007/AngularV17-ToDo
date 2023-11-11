import { TodoSignalsComponent } from './routes/todo-signals/todo-signals.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'todo',
    loadComponent: () =>
      import('./routes/todo-list/todo-list.component').then(
        (m) => m.TodoListComponent
      ),
  },
  {
    path: 'todo-reactiveforms',
    loadComponent: () =>
      import('./routes/todo-reactiveforms/todo-reactiveforms.component').then(
        (m) => m.TodoReactiveformsComponent
      ),
  },
  {
    path: 'todo-signals',
    loadComponent: () =>
      import('./routes/todo-signals/todo-signals.component').then(
        (m) => m.TodoSignalsComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'todo',
    pathMatch: 'full',
  },
];
