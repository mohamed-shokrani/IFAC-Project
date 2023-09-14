import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GetFinancDetailsComponent } from './get-financ-details/get-financ-details.component';

const routes: Routes = [
  // { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: '', component: MainLayoutComponent },

  { path: 'about', component: AboutUsComponent },
  { path: 'contacts', component: ContactUsComponent },
  { path: 'details/:id', component: GetFinancDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
