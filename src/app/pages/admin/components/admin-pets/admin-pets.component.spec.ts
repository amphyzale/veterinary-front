import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPetsComponent } from './admin-pets.component';

describe('AdminPetsComponent', () => {
  let component: AdminPetsComponent;
  let fixture: ComponentFixture<AdminPetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
