import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewPageComponent } from './my-new-page.component';

describe('MyNewPageComponent', () => {
  let component: MyNewPageComponent;
  let fixture: ComponentFixture<MyNewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
