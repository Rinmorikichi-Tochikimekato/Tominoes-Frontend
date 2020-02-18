import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCrustComponent } from './admin-crust.component';

describe('AdminCrustComponent', () => {
  let component: AdminCrustComponent;
  let fixture: ComponentFixture<AdminCrustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCrustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCrustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
