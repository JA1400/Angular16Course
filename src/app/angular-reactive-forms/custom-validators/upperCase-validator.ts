import { AbstractControl, ValidationErrors } from "@angular/forms";
/* the first represents form control */
/* the second is an interface that represents the error details returned by the validator function */

/* parameter if type Abstract control is mandatory */
/* we also return a ValidationErrors object in case our validation fails */
export function convertToUpperCase(control: AbstractControl): ValidationErrors | null {
    /* we are grabbing the entered value, converting it to string and assigning it to our constant */
    const uN: string = control.value as string;
    if (uN !== uN.toUpperCase()) {
        /* setValue is a AbstrctControl method and is used to set the value for the form control and update the interface */
        control.setValue(uN.toUpperCase())
    }

    return null;
}

export function urlValidator(control: AbstractControl): ValidationErrors | null{
    const domainExt = ['.com', '.in', '.me', '.org'];
    /* Simply checking if the URL starts with https:// */
    if(!control.value.startsWith('https://')){
        return {urlValid: true};
    }

    /* a normal array method to check if atleast one item meets the condition */
    const checkExtension = domainExt.some((extension) => control.value.includes(extension));

    if(!checkExtension){
        return {urlValid: true};
    }
    return null;
}