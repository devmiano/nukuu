import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopQuoteDetailsComponent } from './top-quote-details.component';

describe('TopQuoteDetailsComponent', () => {
  let component: TopQuoteDetailsComponent;
  let fixture: ComponentFixture<TopQuoteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopQuoteDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopQuoteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
