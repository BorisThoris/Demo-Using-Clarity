import { Component, OnInit, ViewChild } from '@angular/core';
import { ClrWizard } from '@clr/angular';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

import { UserFormComponent } from '../user-form/user-form.component';
import { AlertCompComponent } from '../alert-comp/alert-comp.component';

@Component({
  selector: 'app-control-users',
  templateUrl: './control-users.component.html',
  styleUrls: ['./control-users.component.css'],
})
export class ControlUsersComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  @ViewChild('wizardxl') wizardExtraLarge: ClrWizard;

  begginingUsers;
  model;
  reactiveModel;
  numberModalCount;

  alertMessage: string = 'Users Cleared';
  storedUsers: boolean = false;
  disabled: boolean = false;
  alertOpen: boolean = false;
  xlOpen: boolean = false;

  numberModal;

  users: {
    name: string;
    avatarUrl: string;
  }[];

  ngOnInit(): void {
    var usersCount = JSON.parse(localStorage.getItem('usersCount'));
    var users = JSON.parse(localStorage.getItem('users'));

    if (users !== null) {
      this.storedUsers = users;
      this.disabled = true;
    }

    this.numberModal = this.fb.group({
      numberOfUsers: new FormControl(usersCount ? usersCount : 0, [
        Validators.required,
      ]),
    });

    if (usersCount !== null) {
      this.numberModalCount = usersCount;
      this.numberModal = usersCount;
    }
  }

  showModal(): void {
    var NumberOfUsers = Number(this.numberModal);
    this.disabled = true;
    this.xlOpen = true;

    var tempArr = [];
    for (var i = 1; i <= NumberOfUsers; i++) {
      tempArr.push({ name: `User ${i}`, avatarUrl: '' });
    }

    this.begginingUsers = tempArr;

    this.users = this.begginingUsers.map((obj) => ({ ...obj }));

    this.model = {
      users: this.users,
    };

    this.reactiveModel = this.fb.group({
      users: new FormControl(this.storedUsers ? this.storedUsers : this.users, [
        Validators.required,
      ]),
    });
  }

  showAlert(message): void {
    this.alertMessage = message;
    this.alertOpen = true;

    setTimeout(() => {
      this.alertOpen = false;
    }, 3000);
  }

  clearUsers(): void {
    localStorage.removeItem('users');
    localStorage.removeItem('usersCount');

    this.showAlert('Users Cleared');

    this.storedUsers = false;
    this.disabled = false;
    this.numberModalCount = 0;
    this.numberModal = 0;
  }

  submit(): void {
    this.xlOpen = false;

    var tempUsers = this.reactiveModel.get('users').value;
    var tempUsersCount = Number(this.numberModal);

    localStorage.setItem('users', JSON.stringify(tempUsers));
    localStorage.setItem('usersCount', JSON.stringify(tempUsersCount));

    this.storedUsers = tempUsers;
  }

  numberInputUpdate(): void {
    var numb = this.numberModal;
    if (numb > 50) this.numberModal = 50;
    if (numb < 0) this.numberModal = 0;

    this.numberModalCount = Number(this.numberModal);
  }

  onKey(event): void {
    var type = event.type;
    var index = event.index;
    var value = event.value;
    this.reactiveModel.value.users[index][type] = value;
  }
}
