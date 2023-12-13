import { Component, OnInit } from '@angular/core';// 导入OnInit接口
import { Observable } from 'rxjs';// 导入Observable类
import { CartService } from '../cart.service';// 导入CartService

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {// 实现OnInit接口

  shippingCosts!: Observable<{ type: string, price: number }[]>;// 存储运费价格的属性

  // 在构造函数中注入CartService，以便在组件中使用购物车服务
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // 初始化shippingCosts属性，从CartService中获取运费价格
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}
