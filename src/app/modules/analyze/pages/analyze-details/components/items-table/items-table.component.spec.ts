/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemsTableComponent } from './items-table.component';

fdescribe('ItemsTableComponent', () => {
  let component: ItemsTableComponent;
  let fixture: ComponentFixture<ItemsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Check data validation', () => {
    expect(component.checkResults('',{})).toBeFalsy();
    expect(component.checkResults('1 apple',undefined)).toBeFalsy();
    expect(component.checkResults('1 apple',{quantity:1})).toBeTruthy();
  });



  it('Verify that the error message is displayed', () => {
    component.checkResults('',{});
    expect(component.showErorr).toBeTruthy();
  });

  
  it('Verify that the error message is displayed', () => {
    component.checkResults('',{});
    expect(component.showErorr).toBeTruthy();
  });
});
