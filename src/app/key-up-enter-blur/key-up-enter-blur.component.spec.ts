import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyUpEnterBlurComponent } from './key-up-enter-blur.component';

describe('KeyUpEnterBlurComponent', () => {
  let component: KeyUpEnterBlurComponent;
  let fixture: ComponentFixture<KeyUpEnterBlurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyUpEnterBlurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyUpEnterBlurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
