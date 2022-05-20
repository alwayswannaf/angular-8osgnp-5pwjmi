import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
}
import { Product } from './products';
/* . . . */
export class CartService {
  items: Product[] = [];
/* . . . */
}


export class CartService {
  items: Product[] = [];

  constructor(
    private http: HttpClient
  ) {}
/* . . . */
}

export class CartService {
  /* . . . */
    getShippingPrices() {
      return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
    }
  }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
/* . . . */
}