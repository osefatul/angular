import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class RoomsListComponent {
  // From parents to child
  @Input() rooms: RoomList[] = [];

  // From child to parent
  @Output() selectedRoom = new EventEmitter<RoomList>();
  
  //buttonHandler in room.list.component
  selectRoom (room: RoomList){
    this.selectedRoom.emit(room)
  }
}
