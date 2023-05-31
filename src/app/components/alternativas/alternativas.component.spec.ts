import { TestBed } from '@angular/core/testing';
import { AlternativasComponent } from './alternativas.component';

describe('AlternativasComponent', () => {
  let component: AlternativasComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlternativasComponent]
    })
      .overrideTemplate(AlternativasComponent, '')
      .compileComponents();
  });

  beforeEach(() => {
    component = TestBed.createComponent(AlternativasComponent).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
