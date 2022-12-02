import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function prohibitedWords(wordErr: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const prohibited = wordErr.test(control.value);
    if (prohibited === true) {
      return {
        prohibited: {
          value: control.value
        }
      };
    } else return null;
  }
}

