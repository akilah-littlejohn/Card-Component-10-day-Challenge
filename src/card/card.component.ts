import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { User } from '../user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
})
export class CardComponent implements OnInit {
  
  @Input() title: string;
  @Input() subtitle: string;
  userData:any;
  likeButton: boolean = false;

  constructor(private api:DataService) {}
  ngOnInit() {
    this.userData = this.api.getUser
  }
}
