import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

 dataobj = new Array()

  constructor() { }


  data(filter: string, data ){
    
      let data1 = parseInt(data)
    if(filter == 'ls'){
      for (let i = 0; i < localStorage.length-1; i++)    
      {   
        let salary  = parseInt(JSON.parse(localStorage.getItem('key'+i)).salary)
       if(salary < data1){
       this.dataobj.push ( JSON.parse(localStorage.getItem('key'+i))) 
       } 
      } 
      return this.dataobj
    }else if(filter == 'gs'){
      for (let i = 0; i < localStorage.length-1; i++)    
      {   
        let salary  = parseInt(JSON.parse(localStorage.getItem('key'+i)).salary)
       if(salary >data1){
       this.dataobj.push ( JSON.parse(localStorage.getItem('key'+i))) 
       } 
      } 
      return this.dataobj
  }

}

}
