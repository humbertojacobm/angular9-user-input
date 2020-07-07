import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-up-pseudo-event',
  templateUrl: './key-up-pseudo-event.component.html',
  styleUrls: ['./key-up-pseudo-event.component.css']
})
export class KeyUpPseudoEventComponent implements OnInit {
  value="";
  constructor() { }

  ngOnInit() {
  }

  onEnter(value: string){
    this.value = value;
  }

}
