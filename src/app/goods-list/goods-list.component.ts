import { Component, OnInit } from '@angular/core';
import { GoodsService } from '../goods.service';
import { Goods } from '../goods';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-goods-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './goods-list.component.html',
  styleUrl: './goods-list.component.scss',
})
export class GoodsListComponent implements OnInit {
  goods: Goods[] = [];

  constructor(private goodsService: GoodsService) {}

  ngOnInit() {
    this.goodsService.getGoods().subscribe((goods) => {
      this.goods = goods;
    });
  }
}
