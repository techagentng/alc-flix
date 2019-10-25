import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCollectionsComponent } from './movie-collections.component';

describe('MovieCollectionsComponent', () => {
  let component: MovieCollectionsComponent;
  let fixture: ComponentFixture<MovieCollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
