import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcartComponent } from './showcart.component';

describe('ShowcartComponent', () => {
  let component: ShowcartComponent;
  let fixture: ComponentFixture<ShowcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowcartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
