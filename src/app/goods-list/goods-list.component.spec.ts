import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { GoodsListComponent } from './goods-list.component';
import { GoodsService } from '../goods.service';
import { of } from 'rxjs';
import { Goods } from '../goods'; // Załóżmy, że istnieje odpowiedni interfejs Goods
import { HttpClientTestingModule } from '@angular/common/http/testing';



describe('GoodsListComponent', () => {
  let component: GoodsListComponent;
  let fixture: ComponentFixture<GoodsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ GoodsService      ]
    }).compileComponents();

    fixture = TestBed.createComponent(GoodsListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get goods from service', fakeAsync(() => {
    // Arrange
    const expectedGoods: Goods[] = [
      { id: 123, name: 'Coffee', price: 15.99, description: 'A ceramic coffee.' }
    ];

    const goodsService = TestBed.inject(GoodsService);
    spyOn(goodsService, 'getGoods').and.returnValue(of(expectedGoods));

    // Act
    component.ngOnInit();
    fixture.detectChanges();
    tick();

    // Assert
    expect(component.goods.length).toBe(1);
    expect(component.goods).toEqual(expectedGoods);
  }));

  it('should render goods', fakeAsync(() => {
    // Arrange
    const expectedGoods: Goods[] = [
      { id: 123, name: 'Coffee', price: 15.99, description: 'A ceramic coffee.' }
    ];

    const goodsService = TestBed.inject(GoodsService);
    spyOn(goodsService, 'getGoods').and.returnValue(of(expectedGoods));

    // Act
    component.ngOnInit();
    fixture.detectChanges();
    tick();

    // Assert
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('li p').textContent).toContain('Coffee');
  }));
});
