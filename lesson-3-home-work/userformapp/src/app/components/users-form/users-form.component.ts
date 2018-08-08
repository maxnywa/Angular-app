import { Component, OnInit,ViewChild } from '@angular/core';
import { UserItem } from "../../models/UserItem";
import {FormGroup} from "@angular/forms";


@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

  @ViewChild ('form') form: FormGroup;
  users: UserItem[];

  constructor() { }

  ngOnInit() {
    this.users = [];
  }
  onFocus(name,form){
    console.log(name,form)
  }
  onSubmit(form){
    if(form.invalid)return;

    const user:UserItem = {
      id: this.users.length,
      name: form.value.name,
      email: form.value.email,
      age: form.value.age,
      phoneNumber: form.value.phoneNumber,
      text: form.value.comments,
    };
    this.users.push(user);
    form.resetForm();
  }
  onDeleteUser(id){
    this.users.forEach((user,index) =>{
      if(user.id === id) this.users.splice(index,1)
    })
  }
}
