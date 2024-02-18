import { Component } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrl: './test1.component.css',
  providers:[RecordsService]
})
export class Test1Component {
  constructor(private rs:RecordsService){}
  info1:string[]=[]; // Initialize this array from the array in the service class.
  info2:string[]=[];
  info3:string[]=[];
  recData(){
    this.info1=this.rs.sendData1();
    this.info2=this.rs.sendData2();
    this.info3=this.rs.sendData3();
  }
}
