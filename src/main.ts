import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { CardComponent } from './card/card.component';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, CardComponent],
  template: `
<app-card [title]="name" [subtitle]="status"></app-card>
  `,
})
export class App {
  name: string = 'Angular';
  status: string = 'Single';
}

bootstrapApplication(App, {
  providers: [provideHttpClient()],
});
