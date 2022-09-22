import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: "list", component: HotelListComponent }];

@NgModule({
  declarations: [HotelListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class HotelModule { }
