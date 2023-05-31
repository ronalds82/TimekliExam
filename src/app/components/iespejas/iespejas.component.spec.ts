import { TestBed } from '@angular/core/testing';
import { IespejasComponent } from './iespejas.component';

describe('IespejasComponent', () => {
  let component: IespejasComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IespejasComponent]
    })
      .overrideTemplate(IespejasComponent, '')
      .compileComponents();
  });

  beforeEach(() => {
    component = TestBed.createComponent(IespejasComponent).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
