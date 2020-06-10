import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css'],
})
export class ViewUsersComponent implements OnInit {
  users;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('users'));
    if (!this.users) {
      this.router.navigate([`/control-users`]);
      alert('no users created');
    }
    console.log(this.users);
  }

  updateUrl(event): void {
    console.log(event.target.src);
    event.target.src =
      'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png';
  }

  deleteUser(index): void {
    // alert(index);
    console.log(this.users);
    var newArray = this.users.map((obj) => ({ ...obj }));

    if (index > -1) {
      newArray.splice(index, 1);
    }

    this.users = newArray;

    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
