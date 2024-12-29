import { Component, EventEmitter, Output } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent,CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

currentName = "Duwal";

p_names = ['B','D'];
addName(newName: string){
  this.p_names.push(newName);
  this.clearInput();
}

clearInput(){
  let input = <HTMLInputElement>document.getElementById('name-input');
  input.value = '';
}
}
 