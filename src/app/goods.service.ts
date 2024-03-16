import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Goods } from './goods';
import { GoodsResponse } from './GoodsResponse';

@Injectable({
  providedIn: 'root',
})
export class GoodsService {
  constructor(private httpClient: HttpClient) {}

  getGoods(): Observable<Goods[]> {
    return this.httpClient
      .get<GoodsResponse>(
        'https://4c5b2a63-b0d1-4248-8e37-90b27d801c00.mock.pstmn.io/api/v1/goods'
      )
      .pipe(map((response) => response.goods));
  }
}


