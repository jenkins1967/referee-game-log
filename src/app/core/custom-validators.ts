import {ValidatorFn, AbstractControl} from "@angular/forms";

export function matchingSiblingsValidator(controlName1: string, controlName2:string): ValidatorFn {
    return (group: AbstractControl): {[key: string]: any} | null => {
      const control1 = group.get(controlName1);
      if(!control1){
        console.error("Control " + control1 + " not found.")
      }
      const control2 = group.get(controlName2);
      if(!control1){
        console.error("Control " + control2 + " not found.")
      }
      const noMatch = control1.value !== control2.value;
      console.log("no match is " + noMatch);
      return noMatch ? {'matchingSiblings':true} : null;
    };
  }
  export function matchesSiblingValidator(controlName: string): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      if(!control.parent){
        return null;
      }
      const control1 = control.parent.get(controlName);
      if(!control1){
        console.error("Control " + control1 + " not found.")
      }
      
      const noMatch = control1.value !== control.value;
      console.log("no match is " + noMatch);
      return noMatch ? {'matchesSibling':true} : null;
    };
  }