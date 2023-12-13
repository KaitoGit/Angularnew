// 导入所需的模块和类
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// 导入产品模型和数据
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details', // 组件选择器，用于在HTML中标识组件位置
  templateUrl: './product-details.component.html', // 组件的HTML模板文件路径
  styleUrls: ['./product-details.component.css'] // 组件的CSS样式文件路径
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined; // 存储当前产品信息的属性

  // 构造函数，注入 ActivatedRoute 以获取路由信息
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }
  

  // 初始化方法，当组件被创建时自动调用
  ngOnInit() {
    // 从当前路由获取产品ID
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // 在产品数组中查找与路由参数中的ID匹配的产品
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
