import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms.service';
import { RoomList } from 'src/interface';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent implements OnInit {

  constructor(private roomService: RoomsService){}

  ngOnInit(): void {
    this.roomsList = this.roomService.getRoom()
  }

  roomsList: RoomList[] = [];

  //Default values for room
  room: RoomList ={
    roomType: "",
    amenities: "",
    photos: "",
    checkInTime: new Date(),
    checkOutTime: new Date()
  }

  onSubmit (){
    this.roomsList = [...this.roomsList, this.room ]
    console.log("room updated")
    console.log("Here is the updated rooms list", this.roomsList)
  }
}
