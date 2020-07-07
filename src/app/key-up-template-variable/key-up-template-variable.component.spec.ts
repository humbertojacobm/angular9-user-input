import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyUpTemplateVariableComponent } from './key-up-template-variable.component';

describe('KeyUpTemplateVariableComponent', () => {
  let component: KeyUpTemplateVariableComponent;
  let fixture: ComponentFixture<KeyUpTemplateVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyUpTemplateVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyUpTemplateVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
