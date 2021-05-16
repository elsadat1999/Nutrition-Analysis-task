/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TotalNutrientsTableComponent } from './total-nutrients-table.component';
import { Nutrients, TotalNutrients } from '../../models/total-nutrients.interface';
import { ActivatedRoute } from '@angular/router';

describe('TotalNutrientsTableComponent', () => {
  let component: TotalNutrientsTableComponent;
  let fixture: ComponentFixture<TotalNutrientsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalNutrientsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalNutrientsTableComponent);
    component = fixture.componentInstance;
  
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
    
  });

  it('Verify data response', () => {
    expect(component.totalNutrients).toEqual(new TotalNutrients());
  });
});
