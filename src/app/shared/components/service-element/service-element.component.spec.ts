import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ServiceElementComponent } from './service-element.component';

describe('ServiceElementComponent', () => {
  let component: ServiceElementComponent;
  let fixture: ComponentFixture<ServiceElementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
