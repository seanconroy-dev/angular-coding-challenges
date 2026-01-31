import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vokale } from './vokale';

describe('Vokale', () => {
  let component: Vokale;
  let fixture: ComponentFixture<Vokale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vokale]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vokale);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
