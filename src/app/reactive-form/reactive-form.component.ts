import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.sass'
})
export class ReactiveFormComponent {

  readonly fb = inject(FormBuilder);
  submited = false;

  jobForm = this.fb.group({
    fullName: [ '', [Validators.required, Validators.minLength(3)] ],
    email: [ '', [Validators.required, Validators.email] ],
    experience: [ '', [Validators.required, Validators.min(0), Validators.max(50)] ],
    skills: this.fb.group({
      angular: [ false ],
      typescript: [ false ],
      javascript: [ false ]
    })
  });

  onSubmit() {
    if (this.jobForm?.valid) {
      this.submited = true;
      console.log(`Form submited: ${this.jobForm.value}`);
    } else {
      console.log('Form is invalid');
    }
  }
  get f() {
    return this.jobForm.controls;
  }
  
  onReset() {
  }
}