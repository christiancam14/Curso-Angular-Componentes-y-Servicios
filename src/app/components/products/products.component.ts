import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/models/product.model';

import { StoreService } from 'src/app/services/store.service';

import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total = 0;

  products: Product[] = []
  today = new Date(2019, 1,1);
  date = new Date(2021, 1, 21);

  constructor(
    // Inyectar el servicio en el componente
    private storeService: StoreService,
    // Trae la información de los productos desde la API, es Async
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data => {
      this.products = data;
    });
  }

  onAddToshoppingCart(product: Product){
    this.myShoppingCart.push(product);
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

}
