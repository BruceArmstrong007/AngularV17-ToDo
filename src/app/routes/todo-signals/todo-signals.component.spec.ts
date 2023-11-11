import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSignalsComponent } from './todo-signals.component';

describe('TodoSignalsComponent', () => {
  let component: TodoSignalsComponent;
  let fixture: ComponentFixture<TodoSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoSignalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
