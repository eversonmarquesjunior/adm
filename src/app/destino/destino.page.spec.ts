import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinoPage } from './destino.page';

describe('DestinoPage', () => {
  let component: DestinoPage;
  let fixture: ComponentFixture<DestinoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
