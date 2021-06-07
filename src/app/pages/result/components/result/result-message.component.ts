import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-message',
  templateUrl: './result-message.component.html',
  styleUrls: ['./result-message.component.scss']
})
export class ResultMessageComponent implements OnInit {
  @Input() result = '';
  @Input() timeExpired = false;

  constructor() { }

  ngOnInit(): void {
  }

}
