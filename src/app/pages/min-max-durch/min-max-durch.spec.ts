import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinMaxDurch } from './min-max-durch';

describe('MinMaxDurch', () => {
  let component: MinMaxDurch;
  let fixture: ComponentFixture<MinMaxDurch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinMaxDurch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinMaxDurch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
