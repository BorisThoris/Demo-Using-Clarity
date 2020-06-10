import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlUsersComponent } from './control-users.component';

describe('ControlUsersComponent', () => {
  let component: ControlUsersComponent;
  let fixture: ComponentFixture<ControlUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
