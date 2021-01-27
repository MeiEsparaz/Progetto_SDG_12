import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NTypeComponent } from './n-type.component';

describe('NTypeComponent', () => {
  let component: NTypeComponent;
  let fixture: ComponentFixture<NTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
