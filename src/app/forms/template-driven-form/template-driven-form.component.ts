import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent {
  userDetails = {
    fullName: '',
    address1: '',
    phoneNumber: null,
    age: null,
    district: ''
  }

  submitForm(form: NgForm) {
     console.log(form);
      if(form.controls?.['address1'].value.length > 0)
        this.userDetails.district = "Address 1 must not contain any information.";
  }
}
