import { Component, ViewChild, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';
import {HeaderComponent} from "../header/header.component"
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})



export class RoomsComponent implements OnInit {


  hotelName: string = "Hilton hotel"
  numberOfRooms: number = 50

  hideRooms:boolean = true;
  roomsTitle:string = "Rooms List"
  roomsList: RoomList[] = []

  rooms: Room = 
  { availableRooms: 25,
    bookedRooms: 23,
    totalRooms: 50,
  }


  constructor(private roomsService: RoomsService){}

  ngOnInit(){
    this.roomsList = this.roomsService.getRoom()
    console.log(this.roomsService.getHotels())
  }




  toggle(){
    this.hideRooms = !this.hideRooms; //toggle the value
    this.roomsTitle = "Rooms List updated";
  }


  //-------Accessing ChildComponent -----------------
  //create an instance of HeaderComponent
  @ViewChild('childComponent') child!: HeaderComponent;
  ngAfterViewInit() {
    this.child.headerTitle = "Welcome to the best hotel in the world"
  }


  addRoom(){
    const room: RoomList = 
      {
        roomNumber:10,
        roomType: "new Deluxe Room",
        amenities: "Air Conditioner, Free Wifi",
        price: 400,
        photos:"https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVkcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80",
        checkInTime: new Date('11-Feb-2023'),
        checkOutTime: new Date('18-Feb-2023')
      }
      
      // this.roomsList.push(room)  //mutating room list
      this.roomsList = [...this.roomsList, room]
  }


  // ------- Receive data (props) from child------------------
  selectedJson!: RoomList
  
  selectParentRoom (room:RoomList){
    // console.log(room)
    this.selectedJson = room
  }
  
}


