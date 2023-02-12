import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'], 
  standalone:true,
  imports:[CommonModule]
})
export class ProfileComponent implements OnInit {
  userData: any[];
  @Input() headerTitle:string;
  constructor(private api: DataService) { }

  ngOnInit() {
    this.api.getUser().subscribe((data) => {
      this.userData = data.results;
      console.log(this.userData)
  
    });
  }

}