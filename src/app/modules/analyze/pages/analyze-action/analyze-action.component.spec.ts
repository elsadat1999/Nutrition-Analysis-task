/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AnalyzeActionComponent } from './analyze-action.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('AnalyzeActionComponent', () => {
  let component: AnalyzeActionComponent;
  let fixture: ComponentFixture<AnalyzeActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnalyzeActionComponent],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        FormsModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzeActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
