import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsComponent } from './rooms.component';

const routes: Routes = [
  {path: "rooms", 
  component: RoomsComponent,
  children: [{path:":roomId", component: RoomBookingComponent}]},
  {path:"rooms/add", component: RoomsAddComponent},
  // {path:"rooms/:roomId", component: RoomBookingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
