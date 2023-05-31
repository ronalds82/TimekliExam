import { TestBed } from '@angular/core/testing';
import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationComponent]
    })
      .overrideTemplate(NavigationComponent, '')
      .compileComponents();
  });

  beforeEach(() => {
    component = TestBed.createComponent(NavigationComponent).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
