import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearFavoriteComponent } from './clear-favorite.component';

describe('ClearFavoriteComponent', () => {
  let component: ClearFavoriteComponent;
  let fixture: ComponentFixture<ClearFavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearFavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
