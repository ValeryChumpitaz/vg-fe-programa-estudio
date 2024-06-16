import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebrantsListComponent } from './study-programme';

describe('CelebrantsListComponent', () => {
  let component: CelebrantsListComponent;
  let fixture: ComponentFixture<CelebrantsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CelebrantsListComponent]
    });
    fixture = TestBed.createComponent(CelebrantsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
