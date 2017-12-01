import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cor-builder',
  templateUrl: './cor-builder.component.html',
  styleUrls: ['./cor-builder.component.css']
})
export class CorBuilderComponent implements OnInit {
  @Input() cores: string[];
  @Input() isCheckable: boolean;
  @Output() onColorChecked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  OnColorChecked(cor: string) {
    this.onColorChecked.emit(cor);
  }
}
