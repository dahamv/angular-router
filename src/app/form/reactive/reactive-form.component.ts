import { Component, OnInit } from '@angular/core';

export type EditorType = 'name' | 'profile';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {

  editor: EditorType = 'name';

  get showNameEditor() {
    return this.editor === 'name';
  }

  get showProfileEditor() {
    return this.editor === 'profile';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}
