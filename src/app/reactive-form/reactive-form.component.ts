import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-reactive-form',
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './reactive-form.component.html',
    styleUrl: './reactive-form.component.sass'
})
export class ReactiveFormComponent {

  username = signal('');
  errors = signal<Record<string, string>>({});
  isSubmitting = signal(false);

  data = signal('');

  updateUsername(event: Event) {
    this.username.set((event.target as HTMLInputElement).value);
    this.validateUsername();
  }

  validateUsername() {
    if (this.username().length < 3) {
      this.errors.update(errors => ({
        ...errors,
        username: 'Username must be least 3 characters'
      }));
    } else {
      this.errors.update(errors => {
        const newErrors = { ...errors };
        delete newErrors['username'];
        return newErrors;
      });
    }
  }

  submit() {
    this.isSubmitting.set(true);
    this.data.set(this.username());
    console.log(this.username)
    //
  }

  // readonly fb = inject(FormBuilder);
  // submited = false;

  // jobForm = this.fb.group({
  //   fullName: [ '', [Validators.required, Validators.minLength(3)] ],
  //   email: [ '', [Validators.required, Validators.email] ],
  //   experience: [ '', [Validators.required, Validators.min(0), Validators.max(50)] ],
  //   skills: this.fb.group({
  //     angular: [ false ],
  //     typescript: [ false ],
  //     javascript: [ false ]
  //   })
  // });

  // onSubmit() {
  //   if (this.jobForm?.valid) {
  //     this.submited = true;
  //     console.log(`Form submited: ${this.jobForm.value}`);
  //   } else {
  //     console.log('Form is invalid');
  //   }
  // }
  // get f() {
  //   return this.jobForm.controls;
  // }

  // onReset() {
  // }
}
