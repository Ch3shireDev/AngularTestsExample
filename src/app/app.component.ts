import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GoodsListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'example';
}
