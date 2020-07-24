# TouchableOpacity 触摸

## 基本用法

```jsx
import { TouchableOpacity } from 'osdocui';
const Demo = () => {
  return (
    <div>
      <TouchableOpacity>
        <div>触摸</div>
      </TouchableOpacity>
    </div>
  );
};
ReactDOM.render(<Demo />, mountNode);
```

## API

| 属性            | 类型      | 默认值 | 说明       |
| :-------------- | :-------- | :----- | :--------- |
| disabled        | `boolean` | false  | 是否禁用   |
| activeClassName | `string`  |        | 点击的样式 |
