import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SabiedriskaisComponent } from './components/sabiedriskais/sabiedriskais.component';
import { MajasComponent } from './components/majas/majas.component';
import { AutomasinaComponent } from './components/automasina/automasina.component';
import { KajasComponent } from './components/kajas/kajas.component';
import { AlternativasComponent } from './components/alternativas/alternativas.component';
import { SkersliComponent } from './components/skersli/skersli.component';
import { IespejasComponent } from './components/iespejas/iespejas.component';
import { PiedzivojumiComponent } from './components/piedzivojumi/piedzivojumi.component';

const routes: Routes = [
  { path: '', redirectTo: '/majas', pathMatch: 'full' },
  { path: 'majas', component: MajasComponent },
  { path: 'sabiedriskais', component: SabiedriskaisComponent },
  { path: 'automasina', component: AutomasinaComponent },
  { path: 'ar-kajam', component: KajasComponent },
  { path: 'alternativas', component: AlternativasComponent },
  { path: 'skersli', component: SkersliComponent },
  { path: 'iespejas', component: IespejasComponent },
  { path: 'piedzivojumi', component: PiedzivojumiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
