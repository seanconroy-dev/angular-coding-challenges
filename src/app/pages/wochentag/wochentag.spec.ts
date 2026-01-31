import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wochentag } from './wochentag';

describe('Wochentag', () => {
  let component: Wochentag;
  let fixture: ComponentFixture<Wochentag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wochentag]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wochentag);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
