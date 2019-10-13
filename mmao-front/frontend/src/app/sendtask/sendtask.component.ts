import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';




@Component({
  selector: 'app-sendtask',
  templateUrl: './sendtask.component.html',
  styleUrls: ['./sendtask.component.css']
})
export class SendtaskComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  links: string[] =  [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      companyName: ['', Validators.required]
    });
  }

  removeLink(link: string) {
    console.log('remove (' + link + ')');
  }

  addLink() {
    this.links.push('e.g. company\'s website');
  }
  showLinks() {
    console.log(this.links.toString());
  }



}
