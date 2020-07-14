import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewAnalyticalDataComponent } from './add-new-analytical-data.component';

describe('AddNewAnalyticalDataComponent', () => {
  let component: AddNewAnalyticalDataComponent;
  let fixture: ComponentFixture<AddNewAnalyticalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewAnalyticalDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewAnalyticalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
