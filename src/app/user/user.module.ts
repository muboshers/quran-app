import { isDevMode, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingRoutingModule } from './user-routing/user-routing-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { userReducer } from './store/reducer';

// components
import {
  AyatCardComponent,
  CategoriesComponent,
  CategorySectionComponent,
  FooterComponent,
  HeaderComponent,
  ModalComponent,
  RecentlySurahCardComponent,
  RecentlySurahComponent,
  SearchTermComponent,
  SettingSectionComponent,
  SingleSurahMainComponent,
  SingleSurahSettingsModalComponent,
  SubHeaderComponent,
  SurahListCardComponent,
  SurahListComponent,
} from './components';

// pages
import { HomeComponent, SingleSurahComponent } from './pages';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';
@NgModule({
  declarations: [
    HeaderComponent,
    ModalComponent,
    HomeComponent,
    SearchTermComponent,
    CategoriesComponent,
    RecentlySurahComponent,
    RecentlySurahCardComponent,
    SingleSurahMainComponent,
    SurahListComponent,
    SurahListCardComponent,
    SettingSectionComponent,
    FooterComponent,
    CategorySectionComponent,
    SingleSurahComponent,
    SingleSurahSettingsModalComponent,
    SubHeaderComponent,
    AyatCardComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingRoutingModule,
    FontAwesomeModule,
    StoreModule.forRoot({ user: userReducer }),
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
  ],
})
export class UserModule {}
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../../assets/i18n/', '.json');
}
