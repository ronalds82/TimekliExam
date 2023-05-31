import { TestBed } from '@angular/core/testing';
import { AutomasinaComponent } from './automasina.component';

describe('AutomasinaComponent', () => {
  let component: AutomasinaComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutomasinaComponent]
    })
      .overrideTemplate(AutomasinaComponent, '')
      .compileComponents();
  });

  beforeEach(() => {
    component = TestBed.createComponent(AutomasinaComponent).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
