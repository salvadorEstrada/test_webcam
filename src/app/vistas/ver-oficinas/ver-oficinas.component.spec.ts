import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerOficinasComponent } from './ver-oficinas.component';

describe('VerOficinasComponent', () => {
  let component: VerOficinasComponent;
  let fixture: ComponentFixture<VerOficinasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerOficinasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerOficinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
