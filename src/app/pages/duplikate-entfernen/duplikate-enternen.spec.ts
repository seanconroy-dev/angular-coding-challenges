import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplikateEntfernen } from './duplikate-entfernen';

describe('DuplikateEntfernen', () => {
  let component: DuplikateEntfernen;
  let fixture: ComponentFixture<DuplikateEntfernen>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuplikateEntfernen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuplikateEntfernen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
