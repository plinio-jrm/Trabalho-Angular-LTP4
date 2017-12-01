import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cor-single',
  templateUrl: './cor-single.component.html',
  styleUrls: ['./cor-single.component.css']
})
export class CorSingleComponent implements OnInit {
  @Input() cor: string;
  @Input() IsCheckable: boolean;
  // readonly region
  @Input() readonly: boolean = false;
  @Input() CorSelected: boolean = true;
  // end region
  @Output() onColorChecked = new EventEmitter<string>();

  selected: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  ChangeSelect() {
    this.selected = !this.selected;
    this.onColorChecked.emit(this.cor);
  }

  IsSelected(): boolean {
    if (this.readonly) {
      return (this.IsCheckable && this.CorSelected);
    } else
      return (this.IsCheckable && this.selected);
  }
  IsntSelected(): boolean {
    if (this.readonly) {
      return (this.IsCheckable && !this.CorSelected);
    } else
      return (this.IsCheckable && !this.selected);
  }
}
