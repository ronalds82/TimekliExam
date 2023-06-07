import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MajasComponent } from './components/majas/majas.component';
import { SabiedriskaisComponent } from './components/sabiedriskais/sabiedriskais.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TranslateCompiler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LinkButtonComponent } from './components/shared/link-button/link-button.component';
import { FooterComponent } from './footer/footer.component';
import { AutomasinaComponent } from './components/automasina/automasina.component';
import { KajasComponent } from './components/kajas/kajas.component';
import { AlternativasComponent } from './components/alternativas/alternativas.component';
import { SkersliComponent } from './components/skersli/skersli.component';
import { IespejasComponent } from './components/iespejas/iespejas.component';
import { PiedzivojumiComponent } from './components/piedzivojumi/piedzivojumi.component';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MajasComponent,
    SabiedriskaisComponent,
    NotFoundComponent,
    LinkButtonComponent,
    FooterComponent,
    AutomasinaComponent,
    KajasComponent,
    AlternativasComponent,
    SkersliComponent,
    IespejasComponent,
    PiedzivojumiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      compiler: {
        provide: TranslateCompiler,
        useClass: TranslateMessageFormatCompiler
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
