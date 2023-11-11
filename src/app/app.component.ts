import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    RouterLink,
  ],
  template: `<button mat-button [routerLink]="['/']">Todo (default)</button
    ><button mat-button [routerLink]="['/todo-reactiveforms']">
      Todo Reactive Forms</button
    ><button mat-button [routerLink]="['./todo-signals']">Todo Signals</button>
    <router-outlet />`,
})
export class AppComponent {}
