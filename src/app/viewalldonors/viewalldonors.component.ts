import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewalldonors',
  templateUrl: './viewalldonors.component.html',
  styleUrls: ['./viewalldonors.component.css']
})
export class ViewalldonorsComponent implements OnInit {

  constructor(private myapi:ApiService) {

    this.fetchData()
   }

  fetchData = () => {
    this.myapi.viewData().subscribe(
      (data) => {
        this.donorData = data
      }
    )
  }

  donorData:any = [
    
  ]

  ngOnInit(): void {
  }

}
