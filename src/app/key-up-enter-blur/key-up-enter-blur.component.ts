import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-up-enter-blur',
  templateUrl: './key-up-enter-blur.component.html',
  styleUrls: ['./key-up-enter-blur.component.css']
})
export class KeyUpEnterBlurComponent implements OnInit {
  value = '';
  constructor() { }

  ngOnInit() {
  }

  update(value: string){ this.value = value};

}
