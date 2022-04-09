import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopQuoteComponent } from './top-quote.component';

describe('TopQuoteComponent', () => {
  let component: TopQuoteComponent;
  let fixture: ComponentFixture<TopQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopQuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
