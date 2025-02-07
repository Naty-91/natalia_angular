// Importaciones necesarias para el componente y formularios reactivos
import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
} from '@angular/forms';
import { Registration } from '../../shared/registration.model';

// Importaciones de Angular Material para diseño y campos de entrada
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true, // Soporte para Angular 14+ con componentes autónomos
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,
  ],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  submittedData: Registration | null = null;

  regions = [
    { id: 1, name: 'Andalucía' },
    { id: 2, name: 'Cataluña' },
    { id: 3, name: 'Madrid' },
    { id: 4, name: 'Valencia' },
    { id: 5, name: 'Galicia' },
    { id: 6, name: 'Castilla y León' },
  ];

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
        birthDate: ['', [Validators.required]],
        regionId: [null, [Validators.required]],
      },
      { validators: this.passwordsMatchValidator }
    );
  }

  // Validador personalizado para verificar que las contraseñas coinciden
  private passwordsMatchValidator(group: AbstractControl): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      group.get('confirmPassword')?.setErrors({ passwordsMismatch: true });
      return { passwordsMismatch: true };
    }

    if (group.get('confirmPassword')?.hasError('passwordsMismatch')) {
      group.get('confirmPassword')?.setErrors(null);
    }

    return null;
  }

  // Método que se ejecuta al enviar el formulario
  onSubmit(): void {
    if (this.registrationForm.valid) {
      this.submittedData = this.registrationForm.value as Registration;
      console.log('Datos enviados:', this.submittedData);
    } else {
      console.log('Formulario inválido');
    }
  }
}
