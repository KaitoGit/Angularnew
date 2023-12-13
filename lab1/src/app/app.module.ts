import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

// 导入必要的模块
@NgModule({
  imports: [
    BrowserModule,               // BrowserModule，用于在浏览器中运行应用
    HttpClientModule,            // HttpClientModule，用于与远程服务器通信
    ReactiveFormsModule,         // ReactiveFormsModule，用于处理响应式表单
    RouterModule.forRoot([       // 配置应用的路由规则
      { path: '', component: ProductListComponent },               // 当访问根路径时，加载产品列表组件
      { path: 'products/:productId', component: ProductDetailsComponent }, // 当访问带有参数的路径时，加载产品详情组件，并传递 productId 参数
      { path: 'cart', component: CartComponent },                  // 当访问购物车路径时，加载购物车组件
      { path: 'shipping', component: ShippingComponent },          // 当访问购物车路径时，加载购物车组件
    ])
  ],
  declarations: [               // 声明当前模块中包含的组件
    AppComponent,               // 根组件
    TopBarComponent,            // 顶部导航栏组件
    ProductListComponent,       // 产品列表组件
    ProductAlertsComponent,     // 产品警告组件
    ProductDetailsComponent,  // 产品详情组件
    CartComponent, ShippingComponent,    // 产品详情组件
  ],
  bootstrap: [
    AppComponent             // 声明根组件为引导组件
  ]
})
export class AppModule { }// 导出模块以供应用使用
