import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SingletonService } from '../../../Services/user-data.service';
import { AppConstants } from '../../../shared/constants/constants';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
 public userForm: FormGroup;

  constructor(private fb: FormBuilder, private SingletonService: SingletonService) {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.maxLength(150)]],
    });
  }

  /**
   * Determines whether submit on
   */
  public onSubmit() {
    if (this.userForm.valid) {
      this.SingletonService.setData(this.userForm.value);
      const x: any = document.getElementById(AppConstants.SNACKBAR);
      x.className = AppConstants.SHOW;
      setTimeout(() => {
        x.className = x.className.replace(AppConstants.SHOW, '');
      }, 10000);
      this.userForm.reset();
    } else {
      this.markFormGroupTouched(this.userForm);
    }
  }

  /**
   * Marks form group touched
   * 
   * @param formGroup formGroup
   */
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}

