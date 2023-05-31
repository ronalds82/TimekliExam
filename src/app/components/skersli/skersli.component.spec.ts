import { TestBed } from '@angular/core/testing';
import { SkersliComponent } from './skersli.component';

describe('SkersliComponent', () => {
  let component: SkersliComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkersliComponent]
    })
      .overrideTemplate(SkersliComponent, '')
      .compileComponents();
  });

  beforeEach(() => {
    component = TestBed.createComponent(SkersliComponent).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
