import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgencyListComponent } from './agency-list/agency-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: "list", component: AgencyListComponent }];

@NgModule({
  declarations: [AgencyListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ],
  exports: [RouterModule]
})
export class AgencyModule { }
