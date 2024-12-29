import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculatorService } from '../calculator.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
num1 : number =0;
num2 : number =0;
result: number | string = 'NA';

constructor(private calcService: CalculatorService) {}

add(){
  this.result = this.calcService.add(this.num1,this.num2);
}

subtract() {
  this.result = this.calcService.sub(this.num1, this.num2);
}

multiply() {
  this.result = this.calcService.mul(this.num1, this.num2);
}

divide() {
  try {
    this.result = this.calcService.div(this.num1, this.num2);
  } catch (error) {
    this.result = (error as Error).message;
  }
}
}
