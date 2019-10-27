import {Component, Input, OnInit} from '@angular/core';
import {Block} from '../block';
import {Transaction} from "../transaction";

@Component({
  selector: 'app-block-detail',
  templateUrl: './block-detail.component.html',
  styleUrls: ['./block-detail.component.css']
})
export class BlockDetailComponent implements OnInit {
  @Input() block: Block;
  constructor() { }

  ngOnInit() {

  }
}
