import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsGuard } from './guards/rooms.guard';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsComponent } from './rooms.component';

const routes: Routes = [
  // {path:"add", component: RoomsAddComponent},
  {path: '', 
  component: RoomsComponent,
  canActivateChild: [RoomsGuard],
  children: [
    {path:"add", component: RoomsAddComponent},
    {path:":roomId", component: RoomBookingComponent}]},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
