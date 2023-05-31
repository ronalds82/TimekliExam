import { TestBed } from '@angular/core/testing';
import { MajasComponent } from './majas.component';

describe('MajasComponent', () => {
  let component: MajasComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MajasComponent]
    })
      .overrideTemplate(MajasComponent, '')
      .compileComponents();
  });

  beforeEach(() => {
    component = TestBed.createComponent(MajasComponent).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
