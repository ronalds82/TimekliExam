import { TestBed } from '@angular/core/testing';
import { SabiedriskaisComponent } from './sabiedriskais.component';

describe('SabiedriskaisComponent', () => {
  let component: SabiedriskaisComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SabiedriskaisComponent]
    })
      .overrideTemplate(SabiedriskaisComponent, '')
      .compileComponents();
  });

  beforeEach(() => {
    component = TestBed.createComponent(SabiedriskaisComponent).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
