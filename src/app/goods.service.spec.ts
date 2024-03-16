import { TestBed } from '@angular/core/testing';

import { GoodsService } from './goods.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, of } from 'rxjs';

describe('GoodsService', () => {
  let service: GoodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(GoodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should parse the response', async () => {

    // Arrange
    var response = {
      "goods":
      [
        {
            "id": 1,
            "name": "Coffee Mug",
            "price": 5.99,
            "description": "A ceramic mug for coffee or tea."
        }
      ]
    };

    let httpClient = TestBed.inject(HttpClient);
    spyOn(httpClient, 'get').and.returnValue(of(response));

    // Act
    let observable = service.getGoods();
    let result = await firstValueFrom(observable);

    // Assert
    expect(result.length).toBe(1);
    expect(result[0].id).toBe(1);
    expect(result[0].name).toBe("Coffee Mug");
    expect(result[0].price).toBe(5.99);
    expect(result[0].description).toBe("A ceramic mug for coffee or tea.");
  });
});
