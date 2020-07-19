import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectureModuleComponent } from './architecture-module.component';

describe('ArchitectureModuleComponent', () => {
  let component: ArchitectureModuleComponent;
  let fixture: ComponentFixture<ArchitectureModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchitectureModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchitectureModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
