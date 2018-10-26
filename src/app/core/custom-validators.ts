import {ValidatorFn, AbstractControl} from "@angular/forms";

export function matchingValuesValidator(controlName1: string, controlName2:string): ValidatorFn {
    return (group: AbstractControl): {[key: string]: any} | null => {
      const control1 = group.get(controlName1);
      if(!control1){
        console.error("Control " + control1 + " not found.")
        return null;
      }
      const control2 = group.get(controlName2);
      if(!control1){
        console.error("Control " + control2 + " not found.")
        return null;
      }
      const noMatch = control1.value !== control2.value;
      console.log("no match is " + noMatch);
      return noMatch ? {'matchingValues':true} : null;
    };
  }