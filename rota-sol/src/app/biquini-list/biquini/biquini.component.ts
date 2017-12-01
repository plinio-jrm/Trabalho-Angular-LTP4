import { Component, OnInit, Input } from '@angular/core';

import { Biquini } from './biquini.model';

@Component({
  selector: 'app-biquini',
  templateUrl: './biquini.component.html',
  styleUrls: ['./biquini.component.css']
})
export class BiquiniComponent implements OnInit {
  @Input() biquini: Biquini;

  constructor() { }

  ngOnInit() {
  }

}
