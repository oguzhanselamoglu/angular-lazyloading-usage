import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { component: AboutComponent, path: "about", pathMatch: "full" },
  { component: HomeComponent, path: "", pathMatch: "full" },
  {
    path: "hotel",
    loadChildren: () =>
      import("./hotel/hotel.module").then(m => m.HotelModule)
  },
  {
    path: "agency",
    loadChildren: () =>
      import("./agency/agency.module").then(m => m.AgencyModule)
  },
  { path: "**", pathMatch: "full", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
