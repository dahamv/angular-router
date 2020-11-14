import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['../../form.component.scss']
})
export class ProfileEditorComponent {

  profileForm = new FormGroup({
                        firstName: new FormControl(''),
                        lastName: new FormControl(''),
                    });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    alert(this.profileForm.value);
  }

}
