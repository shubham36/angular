import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators  } from '@angular/forms';
import{DataserviceService} from '../dataservice.service'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  reactiveForm: FormGroup;
  myObj ={}
  count:number =0
  resultObj :any
  xyz : string ="abc"

  constructor(private fb: FormBuilder,private dataservice :DataserviceService) {

  }

   ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.reactiveForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      salary: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('reactiveForm' , this.reactiveForm.value.name);
    
    this.myObj = this.reactiveForm.value
    localStorage.setItem('key'+this.count, JSON.stringify(this.myObj));
    this.count++;
  }

  result(){
    for (let i = 0; i < localStorage.length-1; i++)    
    {     
      this.dataservice.dataobj =  JSON.parse(localStorage.getItem('key'+i));  
    }  
    
  }

}
