import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'pet-filter',
  templateUrl: './pet-filter.component.html',
  styleUrls: ['./pet-filter.component.scss']
})
export class PetFilterComponent implements OnInit, AfterViewInit {
  @Output() onFilter = new EventEmitter();
  @ViewChild('button') elBtn: ElementRef
  filterBy = {
    name: ''
  }
  constructor() {

  }
  ngAfterViewInit() {
    console.log(this.elBtn);

  }
  ngOnInit(): void {
  }
  // onChangeFilter(ev) {
  //   this.filterBy.name = ev.target.value
  // }
}
