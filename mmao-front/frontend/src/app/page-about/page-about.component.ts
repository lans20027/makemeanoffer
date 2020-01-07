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
  levelProgress;
  level;
  hiddenMeme = true;

  about = "Ciao a tutti, mi chiamo Alexey Vydrin. Ora sto finendo " +
    "il mio programma di master presso l'Università statale siberiana" +
    " di telecomunicazioni e informatica." +
    " Se qualcuno scopre perché lo scrivo in italiano, per favore dimmelo";

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    let date = new Date(Date.parse('1997-12-27'));

    let today = new Date();

    this.level = today.getFullYear() - date.getFullYear();

    if(today.getMonth() < date.getMonth() || today.getDate() < date.getDate()) {
      this.level--;
    }

    this.levelProgress = today.getDate() * (today.getMonth() + 1) / 365.0;
  }

}
