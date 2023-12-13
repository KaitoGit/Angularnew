// ng generate component product-alerts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
// 中的主要功能如下：

// selector（app-product-alerts）用于标识组件。按照惯例，Angular 组件选择器以前缀 app- 开头，后跟组件名称。

// 模板和样式文件名引用了组件的 HTML 和 CSS。

// 这个 @Component() 定义还导出了类 ProductAlertsComponent，该类会处理组件的功能。
export class ProductAlertsComponent {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
}
