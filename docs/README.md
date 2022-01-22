# 快速开始

#### 安装组件库

```bash
npm i fighting-ui
```

#### 使用组件库

> 在 main.js 中引用组件库

```javascript
// 全部引入
import 'fighting-ui/dist/css/index.css';
import FtUI from 'fighting-ui';
Vue.use(FtUI);

// 按需引入
import 'fighting-ui/dist/css/card.css';
import { Card } from 'fighting-ui';
Vue.use(Card);
```
