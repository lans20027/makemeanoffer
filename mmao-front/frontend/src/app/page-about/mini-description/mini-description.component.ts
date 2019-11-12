import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mini-description',
  templateUrl: './mini-description.component.html',
  styleUrls: ['./mini-description.component.css']
})
export class MiniDescriptionComponent implements OnInit {
  @Input() src: string;
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
