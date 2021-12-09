import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarDocComponent } from './enviar-doc.component';

describe('EnviarDocComponent', () => {
  let component: EnviarDocComponent;
  let fixture: ComponentFixture<EnviarDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviarDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
