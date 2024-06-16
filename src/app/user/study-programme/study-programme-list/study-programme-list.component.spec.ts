import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaptismListComponent } from './baptism-list.component';

describe('BaptismListComponent', () => {
  let component: BaptismListComponent;
  let fixture: ComponentFixture<BaptismListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaptismListComponent]
    });
    fixture = TestBed.createComponent(BaptismListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
