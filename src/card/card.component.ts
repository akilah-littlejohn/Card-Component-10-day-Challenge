import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DataService } from '../data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
})
export class CardComponent implements OnInit {
  
   title: string;
  subtitle: string;
  userData:any;
  likeButton: boolean = false;

  constructor(private api:DataService) {}
  ngOnInit() {
    this.api.getUser().subscribe(
      data => {this.userData = data.results
      console.log(this.userData)
      }
    )
  }
}
