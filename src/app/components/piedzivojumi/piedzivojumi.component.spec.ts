import { TestBed } from '@angular/core/testing';
import { PiedzivojumiComponent } from './piedzivojumi.component';

describe('PiedzivojumiComponent', () => {
  let component: PiedzivojumiComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PiedzivojumiComponent]
    })
      .overrideTemplate(PiedzivojumiComponent, '')
      .compileComponents();
  });

  beforeEach(() => {
    component = TestBed.createComponent(PiedzivojumiComponent).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
