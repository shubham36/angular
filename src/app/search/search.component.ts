import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup,Validators  } from '@angular/forms';
import {DataserviceService} from '../dataservice.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  reactiveForm: FormGroup;
  message:any;
  obj = new Array()
  columns: string[] = ["name", "email", "salary"];

  data:Array<Object> = [
      {id: 0, name: "name1"},
      {id: 1, name: "name2"}
  ];
  constructor(private fb: FormBuilder,private dataservice :DataserviceService) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.reactiveForm = this.fb.group({
      search: ['', Validators.required],
      filter: ['', Validators.required],
    });
  }
  onSubmit() {
    console.log('reactiveForm' , this.reactiveForm.value.filter);
    this.obj = this.dataservice.data(this.reactiveForm.value.filter,this.reactiveForm.value.search)
  }


}
