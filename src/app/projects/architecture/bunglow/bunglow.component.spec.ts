import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BunglowComponent } from './bunglow.component';

describe('BunglowComponent', () => {
  let component: BunglowComponent;
  let fixture: ComponentFixture<BunglowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BunglowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BunglowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
