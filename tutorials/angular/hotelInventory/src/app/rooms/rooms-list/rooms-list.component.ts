import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';





@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class RoomsListComponent implements OnInit, OnChanges {

  userData!:{ id: number; name: string; }

  // From parents to child
  @Input() rooms: RoomList[] = [];

  // From child to parent
  @Output() selectedRoom = new EventEmitter<RoomList>();
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }


  ngOnInit(): void {
    this.userData = {id:2, name:"user"}
    console.log(this.userData) 
  }



  //buttonHandler in room.list.component.html
  selectRoom (room: RoomList){
    this.selectedRoom.emit(room)
  }
}
