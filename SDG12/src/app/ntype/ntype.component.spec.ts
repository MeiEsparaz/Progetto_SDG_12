import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtypeComponent } from './ntype.component';

describe('NtypeComponent', () => {
  let component: NtypeComponent;
  let fixture: ComponentFixture<NtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NtypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
