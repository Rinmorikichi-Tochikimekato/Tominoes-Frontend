import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminToppingComponent } from './admin-topping.component';

describe('AdminToppingComponent', () => {
  let component: AdminToppingComponent;
  let fixture: ComponentFixture<AdminToppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminToppingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminToppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
