import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-send-form',
  templateUrl: './send-form.component.html',
  styleUrls: ['./send-form.component.css'],
})
export class SendFormComponent {
  formInputs = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  public data: any = {};

  submitData() {
    this.data = this.formInputs.value;
  }
}
