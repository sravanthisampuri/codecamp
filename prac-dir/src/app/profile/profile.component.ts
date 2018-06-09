import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profilePage: FormGroup;
 public showForm;
  userDetails = {

  }

  constructor() { }

  ngOnInit() {
    this.profilePage = new FormGroup({
      fullname: new FormControl(null, Validators.required),

      dob: new FormControl(null, Validators.required),
      age: new FormControl(null, Validators.required),
      qualification: new FormControl(null, Validators.required),
      highestdegree: new FormControl(null, Validators.required),
    });
  }
  editDetails() {
    if (!this.profilePage.value.fullname || !this.profilePage.value.dob || !this.profilePage.value.age
      || !this.profilePage.value.qualification || !this.profilePage.value.highestdegree) {

      alert("please enter details");
    } else {
      this.userDetails = {
        fullname: this.profilePage.value.fullname,
        dob: this.profilePage.value.dob,
        age:this.profilePage.value.age,
        qualification:this.profilePage.value.qualification,
        highestdegree:this.profilePage.value.highestdegree
      }
    }
    this.showForm = true;
   console.log(this.userDetails)
   
  }
  // RegisterUser(profilePage){
  //   console.log(this.showForm)
  

  // }
}

