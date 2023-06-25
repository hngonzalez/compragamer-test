import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UntypedFormBuilder,NgForm, Validators, ReactiveFormsModule, FormsModule, UntypedFormGroup } from '@angular/forms';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  @ViewChild('signInNgForm') signInNgForm!: NgForm;
  signInForm!: UntypedFormGroup;
  errorLogin: boolean = false;
  loggedUser: boolean = false;

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
  get f() { return this.signInForm.controls; }

  ngOnInit(): void {
      // Create the form
      this.signInForm = this._formBuilder.group({
          email           : ['', [Validators.required, Validators.email]],
          password        : ['', Validators.required]
      });
  }

  
  // -----------------------------------------------------------------------------------------------------
  // @ Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Function that loads the user data into the localstorage.
   */
  signIn() {
    const user:any = JSON.parse(localStorage.getItem('user')!);

    if (this.f['email'].value == user!.email && this.f['password'].value == user?.password) {
      this.loggedUser = true;
    }
  }
}
