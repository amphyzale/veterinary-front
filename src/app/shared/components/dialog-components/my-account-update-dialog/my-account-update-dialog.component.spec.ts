import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountUpdateDialogComponent } from './my-account-update-dialog.component';

describe('MyAccountUpdateDialogComponent', () => {
  let component: MyAccountUpdateDialogComponent;
  let fixture: ComponentFixture<MyAccountUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAccountUpdateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccountUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
