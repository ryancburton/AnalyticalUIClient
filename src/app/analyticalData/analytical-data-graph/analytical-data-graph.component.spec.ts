import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticalDataGraphComponent } from './analytical-data-graph.component';

describe('AnalyticalDataGraphComponent', () => {
  let component: AnalyticalDataGraphComponent;
  let fixture: ComponentFixture<AnalyticalDataGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticalDataGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticalDataGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
