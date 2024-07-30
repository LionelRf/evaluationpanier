import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitItemComponent } from './fruit-item.component';

describe('FruitItemComponent', () => {
  let component: FruitItemComponent;
  let fixture: ComponentFixture<FruitItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
