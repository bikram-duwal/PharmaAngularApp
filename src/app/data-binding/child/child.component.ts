import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit {

  @Input() c_name = "Bikram";
  @Output() c_newNameEvent = new EventEmitter<string>();

  @Input() names =['Beek', 'Beekrum','BikramDuwal'];

constructor() {}

  ngOnInit(): void {
  }

addNewNameC(value: string){
  this.c_newNameEvent.emit(value);
  
}



  // addName(value: string){
  //   this.names.push(value);
  // }

}
