import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletedonor',
  templateUrl: './deletedonor.component.html',
  styleUrls: ['./deletedonor.component.css']
})
export class DeletedonorComponent implements OnInit {

  constructor() { }

  donorId=""

  readValues=()=>{
    let data={
      "donorId":this.donorId
    }

    console.log(data)
  }

  ngOnInit(): void {
  }

}
