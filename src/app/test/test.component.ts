import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
 public input='';
 public phone='';
 addedList=[];

   onAdd() {
    if(this.input!='' && this.phone!=''){
    let list = {
      input: this.input,
      phone: this.phone
    };
    this.addedList.push(list);
  }
}
}
