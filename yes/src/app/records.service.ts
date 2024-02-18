import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  emp1:string[]=["Siajuddin","Mumbai","Male"];
  emp2:string[]=["Shubham","Delhi","Male"];
  emp3:string[]=["Sai Krishna","Andhra","Male"];
  sendData1():string[]{
     return this.emp1;
  }
  sendData2():string[]{
     return this.emp2;
  }
  sendData3():string[]{
      return this.emp3;
  }
  constructor() { }
}
