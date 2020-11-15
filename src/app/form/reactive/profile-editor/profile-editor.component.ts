import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['../reactive-form.component.scss']
})
export class ProfileEditorComponent {

//   profileForm = new FormGroup({
//                         firstName: new FormControl(''),
//                         lastName: new FormControl(''),
//                       /* * a nested group
//                          * Changes in status and value from the nested form group propagate to the parent form group,
//                          * maintaining consistency with the overall model.
//                          * */
//                         address: new FormGroup({
//                           street: new FormControl(''),
//                           city: new FormControl(''),
//                           state: new FormControl(''),
//                           zip: new FormControl('')
//                         })
//                       });

    //Same thing above can be done with a FormBuilder like this.
    profileForm = this.fb.group({
        /**Tip You can define the control with just the initial value, but if your controls need sync or async validation,
           add sync and async validators as the second and third items in the array.
        Caution: Use these HTML5 validation attributes in combination with the built-in validators provided by Angular's reactive forms.
        Using these in combination prevents errors when the expression is changed after the template has been checked. */
                        firstName: ['', Validators.required],
                        lastName: [''],
                        address: this.fb.group({
                                street: [''],
                                city: [''],
                                state: [''],
                                zip: ['']
                                }),
                        aliases: this.fb.array([
                                    this.fb.control('')
                                ])
                    });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    alert(this.profileForm.value);
  }

  //In setValue() we have to provide all the values.
  //But in patchValue() we can set what we want like follows.
  updateProfile() {
    this.profileForm.patchValue({
        firstName: 'Nancy',
        address: {
        street: '123 Drew Street'
        }
    });
  }

  get aliases() {
    //returns an  AbstractControl so type cast it to a FormArray
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
}
