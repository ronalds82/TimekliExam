import { TestBed } from '@angular/core/testing';
import { KajasComponent } from './kajas.component';

describe('KajasComponent', () => {
  let component: KajasComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KajasComponent]
    })
      .overrideTemplate(KajasComponent, '')
      .compileComponents();
  });

  beforeEach(() => {
    component = TestBed.createComponent(KajasComponent).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
