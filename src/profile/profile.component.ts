import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Result } from '../result';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'], 
  standalone:true
})
export class ProfileComponent implements OnInit {
  userData: any[];
  constructor(private api: DataService) { }

  ngOnInit() {
    this.api.getUser().subscribe((data) => {
      this.userData = data.results;
      console.log(this.userData);
    });
  }

}