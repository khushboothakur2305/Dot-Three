import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorModuleComponent } from './interior-module.component';

describe('InteriorModuleComponent', () => {
  let component: InteriorModuleComponent;
  let fixture: ComponentFixture<InteriorModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteriorModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteriorModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
