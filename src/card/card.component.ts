import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
})
export class CardComponent implements OnInit {
  title: string = 'InstaDate';
  subtitle: string = 'Member Since 2005';
  likeButton: boolean = false;
  likeButtonText = {
    hearted: 'Hearted',
    heartThem: 'Heart Them',
  };
  @Input() count:number = 1
  constructor() {}
  ngOnInit() {}
}
