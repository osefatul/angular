import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomsService } from 'src/app/services/rooms.service';
import { RoomList } from 'src/interface';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})



export class RoomsAddComponent implements OnInit {
  //Default values
  roomsList: RoomList[] = [];
  isDirty:boolean = false;
  room: RoomList ={
    roomNumber: null,
    roomType: "",
    amenities: "",
    price: null,
    photos: "",
    checkInTime: new Date(),
    checkOutTime: new Date()
  }

  ngOnInit(): void {
    this.roomsList = this.roomService.getRoom()
  }

  //Real time data change to show in the template:
  room$: Observable<RoomList> ;
  constructor(private roomService: RoomsService){
    this.room$ = new Observable(Observer => {
      Observer.next(this.room);
      Observer.complete();
    })
  }


  //Real time change data demonstrated in the console.log
  onDataChanged (){
    this.isDirty = true;
    console.log('Form data changed:', this.room);
  }

  onSubmit (){
    this.roomsList = [...this.roomsList, this.room ]
    console.log("room updated")
    console.log("Here is the updated rooms list", this.roomsList)
  }
}
