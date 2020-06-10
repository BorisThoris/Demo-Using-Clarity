import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert-comp',
  templateUrl: './alert-comp.component.html',
  styleUrls: ['./alert-comp.component.css'],
})
export class AlertCompComponent implements OnInit {
  @Input() message: string;

  constructor() {}

  ngOnInit(): void {}

  onClose() {}
}
