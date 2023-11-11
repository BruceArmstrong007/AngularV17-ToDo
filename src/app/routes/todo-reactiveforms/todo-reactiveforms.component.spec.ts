import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoReactiveformsComponent } from './todo-reactiveforms.component';

describe('TodoReactiveformsComponent', () => {
  let component: TodoReactiveformsComponent;
  let fixture: ComponentFixture<TodoReactiveformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoReactiveformsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoReactiveformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
