---
category: Components
group: 数据录入
title: Rate
subtitle: 评分
description: 用于对事物进行评分操作。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*oyOcTrB12_YAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*M7_ER7GJr6wAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
---

<DocHeading></DocHeading>

## 何时使用 {#when-to-use}

- 对评价进行展示。
- 对事物进行快速的评级操作。

## 示例 {#examples}

<demo-group>
  <demo src="./demo/basic.vue">基本</demo>
  <demo src="./demo/half.vue">半星</demo>
  <demo src="./demo/text.vue">文案展现</demo>
  <demo src="./demo/disabled.vue">只读</demo>
  <demo src="./demo/clear.vue">清除</demo>
  <demo src="./demo/character.vue">其他字符</demo>
  <demo src="./demo/character-function.vue">自定义字符</demo>
  <demo src="./demo/size.vue">其它尺寸</demo>
  <demo src="./demo/component-token.vue" debug>组件 Token</demo>
</demo-group>

## API

### 属性 {#property}

通用属性参考：[通用属性](/docs/vue/common-props)

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 是否允许再次点击后清除 | boolean | true | - |
| allowHalf | 是否允许半选 | boolean | false | - |
| autoFocus | 自动获取焦点 | boolean | false | - |
| character | 自定义字符 | VueNode \| (props: RateProps) => VueNode | `<StarFilled />` | - |
| count | star 总数 | number | 5 | - |
| disabled | 只读，无法进行交互 | boolean | false | - |
| rootClass | - | string | - | - |
| size | 星星尺寸 | 'small' \| 'middle' \| 'large' | 'middle' | - |
| tooltips | 自定义每项的提示信息 | (TooltipProps \| string)[] | - | - |
| value| 当前数，受控值 | number | - | - |

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| change | 选择时的回调 | (value: number) =&gt; void | - |
| hoverChange | 鼠标经过时数值变化的回调 | (value: number) =&gt; void | - |
| focus | 获取焦点时的回调 | () =&gt; void | - |
| blur | 失去焦点时的回调 | () =&gt; void | - |
| keydown | - | (e: KeyboardEvent) =&gt; void | - |
| mouseleave | - | (e: FocusEvent) =&gt; void | - |
