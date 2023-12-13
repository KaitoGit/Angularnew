import { HttpClient } from '@angular/common/http';// 导入 HttpClient，用于与远程服务器通信
// 导入 Product 类，它用于表示购物车中的产品项
import { Product } from './products';

// 导入 Injectable 装饰器，用于标记该服务可被依赖注入
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // 标记此服务为根级注入，可在整个应用中共享
})
export class CartService {
  items: Product[] = []; // 存储购物车中的产品项的数组

  constructor(
    private http: HttpClient
  ) {}

  // 将产品添加到购物车的方法
  addToCart(product: Product) {
    this.items.push(product);
  }

  // 获取购物车中的所有产品项的方法
  getItems() {
    return this.items;
  }

  // 清空购物车的方法
  clearCart() {
    this.items = []; // 将购物车中的数组重置为空数组
    return this.items; // 返回清空后的空数组
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
