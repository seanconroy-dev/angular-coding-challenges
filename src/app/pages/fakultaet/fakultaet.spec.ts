import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fakultaet } from './fakultaet';

describe('Fakultaet', () => {
  let component: Fakultaet;
  let fixture: ComponentFixture<Fakultaet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fakultaet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fakultaet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
