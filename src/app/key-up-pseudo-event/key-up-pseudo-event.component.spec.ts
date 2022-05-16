import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyUpPseudoEventComponent } from './key-up-pseudo-event.component';

describe('KeyUpPseudoEventComponent', () => {
  let component: KeyUpPseudoEventComponent;
  let fixture: ComponentFixture<KeyUpPseudoEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyUpPseudoEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyUpPseudoEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
