import { Component, Input, forwardRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-text-component.html',
  styleUrls: ['./input-text-component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true,
    },
  ],
})
export class InputTextComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() type: 'text' | 'email' = 'text';
  @Input() placeholder: string = '';

  /** atributos extras */
  @Input() name?: string;
  @Input() id?: string;
  @Input() maxlength?: number;
  @Input() autocomplete?: string;
  @Input() readonly?: boolean;

  /** validators opcionales */
  @Input() validators: ValidatorFn[] = [];

  /** valor solo string */
  value: string = '';
  disabled = false;

  /** inyección del control */
  ngControl: NgControl = inject(NgControl, { optional: true })!;

  // ControlValueAccessor
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange = (_: string) => {};
  onTouched = () => {};

registerOnChange(fn: (val: string) => void): void {
  this.onChange = fn;
}

writeValue(value: string): void {
  this.value = value ?? '';
}

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // Helpers
  get control() {
    return this.ngControl?.control;
  }

  get errors(): ValidationErrors | null {
    return this.control?.errors ?? null;
  }

  get showErrors(): boolean {
    return !!this.control?.touched && !!this.errors;
  }

  get errorMessage(): string | null {
    if (!this.errors) return null;

    if (this.errors['required']) return 'Este campo es obligatorio';
    if (this.errors['email']) return 'Debe ser un correo válido';
    if (this.errors['minlength'])
      return `Debe tener al menos ${this.errors['minlength'].requiredLength} caracteres`;
    if (this.errors['maxlength'])
      return `Debe tener máximo ${this.errors['maxlength'].requiredLength} caracteres`;

    return 'Campo inválido';
  }
}