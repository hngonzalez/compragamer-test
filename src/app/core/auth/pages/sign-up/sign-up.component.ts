import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, UntypedFormBuilder, UntypedFormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/user';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  @ViewChild('signUpNgForm') signUpNgForm!: NgForm;
  signUpForm!: UntypedFormGroup;
  errorLogin: boolean = false;
  addedUser: boolean  = false;

  constructor(
    private _formBuilder: UntypedFormBuilder
  ) {

  }

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Setter & getter
   */
  get f() { return this.signUpForm.controls; }

  ngOnInit(): void {
      // Create the form
      this.signUpForm = this._formBuilder.group({
          name            : ['', Validators.required],
          lastname        : ['', Validators.required],
          dni             : ['', Validators.required],
          email           : ['', [Validators.required, Validators.email]],
          password        : ['', Validators.required],
          cellphone_number: ['', Validators.required]
      });
  }

  
  // -----------------------------------------------------------------------------------------------------
  // @ Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Function that loads the user data into the localstorage.
   */
  signUp() {
    const user: User = {
      name: this.f['name'].value,
      lastname: this.f['lastname'].value,
      dni: this.f['dni'].value,
      email: this.f['email'].value,
      password: this.f['password'].value,
      cellphone_number: this.f['cellphone_number'].value
    }
    localStorage.setItem('user', JSON.stringify(user));
    this.addedUser = true;
  }
}
