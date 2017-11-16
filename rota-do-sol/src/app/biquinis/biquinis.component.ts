import { Component, OnInit } from '@angular/core';

import { BiquiniService } from './biquini.service';

@Component({
  selector: 'sol-biquinis',
  templateUrl: './biquinis.component.html',
  styleUrls: ['./biquinis.component.css']
})
export class BiquinisComponent implements OnInit {

  constructor(private biquiniService: BiquiniService) { }

  ngOnInit() {
  }

}
