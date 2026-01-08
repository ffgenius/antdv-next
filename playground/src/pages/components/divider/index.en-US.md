---
category: Components
title: Divider
description: A divider line separates different content.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*7sMiTbzvaDoAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*KPSEQ74PLg4AAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
group:
  title: Layout
  order: 2
---

<DocHeading></DocHeading>

## When To Use {#when-to-use}

- Divide sections of an article.
- Divide inline text and links such as the operation column of table.

## Examples {#examples}

<demo-group>
  <demo src="./demo/horizontal.vue">Horizontal</demo>
  <demo src="./demo/with-text.vue">Divider with title</demo>
  <demo src="./demo/vertical.vue">Vertical</demo>
  <demo src="./demo/plain.vue">Text without heading style</demo>
  <demo src="./demo/variant.vue">Variant</demo>
  <demo src="./demo/size.vue">Set the spacing size of the divider</demo>
  <demo src="./demo/customize-style.vue">Style Customization</demo>
  <demo src="./demo/style-calss.vue">Custom semantic dom styling</demo>
</demo-group>

## API

### Property {#property}

Common props ref：[Common props](/docs/vue/common-props)

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| dashed | Whether line is dashed | boolean | false |
| orientation | Whether line is horizontal or vertical | `horizontal` \| `vertical` | `horizontal` |
| ~~orientationMargin~~ | The margin-left/right between the title and its closest border, while the `titlePlacement` should not be `center`, If a numeric value of type `string` is provided without a unit, it is assumed to be in pixels (px) by default. | string \| number | - |
| plain | Divider text show as plain style | boolean | true |
| size | The size of divider. Only valid for horizontal layout | `small` \| `middle` \| `large` | - |
| titlePlacement | The position of title inside divider | `start` \| `end` \| `center` | `center` |
| ~~type~~ | The direction type of divider | `horizontal` \| `vertical` | `horizontal` |
| variant | Whether line is dashed, dotted or solid | `dashed` \| `dotted` \| `solid` | `solid` |
| vertical | Orientation, Simultaneously configure with `orientation` and prioritize `orientation` | boolean | false |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | Record<[SemanticDOM](#semantic-dom), string> \| (info: { props })=> Record<[SemanticDOM](#semantic-dom), string> | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | Record<[SemanticDOM](#semantic-dom), CSSProperties> \| (info: { props })=> Record<[SemanticDOM](#semantic-dom), CSSProperties> | - |

### Slots {#slots}

| Name | Description |
| --- | --- |
| default | The wrapped title |

## Semantic DOM {#semantic-dom}

Container element and its child elements' className and style.

| Name | Description |
| --- | --- |
| root | Root element |
| content | Content element (title) |
| rail | Divider line element |
