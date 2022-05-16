import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-up-template-variable',
  templateUrl: './key-up-template-variable.component.html',
  styleUrls: ['./key-up-template-variable.component.css']
})
export class KeyUpTemplateVariableComponent implements OnInit {
  values = '';
  constructor() { }

  ngOnInit() {

  }

  onKey(value: string){
    this.values +=value + ' | ';
  }

}
