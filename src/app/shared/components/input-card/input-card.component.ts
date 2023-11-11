import {
  Component,
  EventEmitter,
  Output,
  WritableSignal,
  signal,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-input-card',
  standalone: true,
  imports: [
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatRippleModule,
  ],
  templateUrl: './input-card.component.html',
  styleUrl: './input-card.component.scss',
})
export class InputCardComponent {
  crntTask: WritableSignal<string> = signal('');
  @Output() outputEvent = new EventEmitter();

  updateValue(target: EventTarget | null) {
    this.crntTask.update(() => (target as HTMLInputElement).value);
  }

  addTask() {
    if (!this.crntTask()) return;
    this.outputEvent.emit(this.crntTask());
    this.crntTask.set('') 
  }
}
