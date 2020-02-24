import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTaxComponent } from './admin-tax.component';

describe('AdminTaxComponent', () => {
  let component: AdminTaxComponent;
  let fixture: ComponentFixture<AdminTaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
