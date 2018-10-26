import { FormGroup } from "@angular/forms";

export abstract class FormManagingComponent{
    myForm:FormGroup;
  
    showInvalid(controlName:string){
      const ctrl = this.myForm.get(controlName);
      return ctrl.touched && ctrl.errors;
    }
  
    showValidationMessage(controlName:string, validator:string){
      const ctrl = this.myForm.get(controlName);
      return ctrl.touched && ctrl.errors && ctrl.errors[validator];
    }
  
    showGroupValidationMessage(validator:string){
      return this.myForm.touched && this.myForm.errors && this.myForm.errors[validator];
    }
  }