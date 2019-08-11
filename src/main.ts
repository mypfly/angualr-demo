import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

/**
 * Disable Angular's development mode, which turns off assertions and other
 * checks within the framework.
 * 关闭开发这模式，运用生产模式，一般开发环境和生产环境是有区别的
 */
if (environment.production) {
  enableProdMode();
}

/**
 * Creates an instance of an `@NgModule` for a given platform using the given runtime compiler.
 * in other words, 用angular平台的运行编译器创建一个模块实例；
 *
 * 再换句话说，用平台提供的 bootstrapModule() 方法启动应用根模块 AppModule, 这样整个应用就能运行起来，
 * 并且将根模块中 bootstrap元数据 声名的根组件 AppComponent 中的内容呈现在浏览器页面
 */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
