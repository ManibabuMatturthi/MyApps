import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedprodsComponent } from './searchedprods.component';

describe('SearchedprodsComponent', () => {
  let component: SearchedprodsComponent;
  let fixture: ComponentFixture<SearchedprodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedprodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchedprodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
