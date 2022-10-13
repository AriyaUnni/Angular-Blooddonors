import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adddonor',
  templateUrl: './adddonor.component.html',
  styleUrls: ['./adddonor.component.css']
})
export class AdddonorComponent implements OnInit {

  constructor() { }

  name=""
  bloodgroup=""
  dob=""
  lastdonationdate=""
  anypreviousdiseases=""
  lastvaccinationdate=""
  address=""
  pincode=""
  mobileno=""
  email=""

  readValues=()=>{
    let data={
      "name":this.name,
  "bloodgroup":this.bloodgroup,
  "dob":this.dob,
  "lastdonationdate":this.lastdonationdate,
  "anypreviousdiseases":this.anypreviousdiseases,
  "lastvaccinationdate":this.lastvaccinationdate,
  "address" :this.address,
  "pincode":this.pincode,
  "mobileno":this.mobileno,
  "email":this.email
    }

    console.log(data)
  }


  ngOnInit(): void {
  }

}
