import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MakeService } from '../services/make.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() data;
  @Output() selectEvent = new EventEmitter();
  shownText = "";

  constructor(private makeService: MakeService){
    var thisObj = this;
    makeService.makeChange.subscribe(
      (onChange) => {
        if(thisObj.data.type == "model"){
          thisObj.ngOnInit();
        }
      });
  }

  ngOnInit() {
    this.shownText = "Select "+this.data.type;
  }

  selectItem(item){
    if(!item) {
      this.shownText = "Select "+this.data.type;
    } else {
      this.shownText = item;
    }
    this.selectEvent.emit(item);
  }

}
