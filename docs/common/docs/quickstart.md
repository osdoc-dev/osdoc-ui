# 开始使用

---

## 安装

使用 npm 或 yarn 安装（推荐）

```bash
# npm
$ npm install osdoc-ui --save

# yarn
$ yarn add osdoc-ui
```

## 使用

### 按需加载

`osdoc-ui` 默认支持基于 `ES modules` 的 `tree shaking`，对于 js 部分，直接引入 `import { Button } from 'osdocui'` 就会有按需加载的效果。

您也可以使用`babel-plugin-import`的方式来实现按需加载

```javascript
// .babelrc or babel-loader option
{
  "plugins": [
    ['import', {
      libraryName: 'osdoc-ui',
      style: true, // or 'css'
    }],
  ]
}
import { Button} from 'osdoc-ui';
```

或者直接可以手动引入

```javascript
import { Button } from 'osdoc-ui';
import 'osdoc-ui/lib/button/style'; // 加载样式
```
