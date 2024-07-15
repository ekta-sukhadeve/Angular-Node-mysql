import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFeaturedComponent } from './article-featured.component';

describe('ArticleFeaturedComponent', () => {
  let component: ArticleFeaturedComponent;
  let fixture: ComponentFixture<ArticleFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleFeaturedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
