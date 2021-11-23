import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicativoComponent } from './aplicativo.component';

describe('AplicativoComponent', () => {
  let component: AplicativoComponent;
  let fixture: ComponentFixture<AplicativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AplicativoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
