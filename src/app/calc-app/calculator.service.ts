import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  public add(num1: number,num2: number) : number{
    return num1 + num2;
  }

  public sub(num1: number,num2: number) : number{
    return num1 - num2;
  }

  public mul(num1: number,num2: number) : number{
    return num1 * num2;
  }

  public div(num1: number,num2: number) : number{
    if(num2 === 0)
      throw new Error('Cannot devide by zero!');
    
    return num1 / num2;
  }
}
