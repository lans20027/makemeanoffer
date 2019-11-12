import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


class MiniDescription {
  src: string;
  description: string;
}

@Component({
  selector: 'app-page-about',
  templateUrl: './page-about.component.html',
  styleUrls: ['./page-about.component.css']
})
export class PageAboutComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  miniDescr: MiniDescription[] = [{src: '../../assets/images/Tomcat.png', description: 'tomcat'},
                                  {src: '../../assets/images/Hibernate.png', description: 'hibernate'},
                                  {src: '../../assets/images/Wildfly.png', description: 'wildfly'},
                                  {src: '../../assets/images/Oracle.png', description: 'oracle'},
                                  {src: '../../assets/images/Maven.png', description: 'maven'},
                                  {src: '../../assets/images/javaee.png', description: 'javaee'}];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
  }

}
