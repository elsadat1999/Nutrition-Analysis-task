/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AnalyzeDetailsComponent } from './analyze-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/shared/services/http.service';
import { JwtInterceptor } from 'src/app/shared/services/jwt-interceptor.service';
import { Config } from 'src/app/shared/confing/config';
import { HeaderComponent } from './components/header/header.component';
import { ItemsTableComponent } from './components/items-table/items-table.component';
import { TotalNutrientsTableComponent } from './components/total-nutrients-table/total-nutrients-table.component';
import { PlaceholderTableModule } from 'src/app/shared/shared-modules/placeholder-table/placeholder-table.module';

describe('AnalyzeDetailsComponent', () => {
  let component: AnalyzeDetailsComponent;
  let fixture: ComponentFixture<AnalyzeDetailsComponent>;
  let activatedRouteService: ActivatedRoute;
  let httpService: HttpService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnalyzeDetailsComponent, HeaderComponent, ItemsTableComponent, TotalNutrientsTableComponent],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        PlaceholderTableModule
      ],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: JwtInterceptor,
          multi: true
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzeDetailsComponent);
    component = fixture.componentInstance;
    activatedRouteService = TestBed.inject(ActivatedRoute);
    activatedRouteService.snapshot.queryParams.ingr = '1 apple';
    httpService = TestBed.inject(HttpService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Integration verification', (done: DoneFn) => {
    const query = { ingr: activatedRouteService.snapshot.queryParams.ingr.split('\n') }
    httpService.post(Config.nutritionDetails, query).subscribe(res => {
      expect(res).toBeTruthy();
      done()
    })
  });
});
