import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedefinicaoPage } from './redefinicao.page';

describe('RedefinicaoPage', () => {
  let component: RedefinicaoPage;
  let fixture: ComponentFixture<RedefinicaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedefinicaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedefinicaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
