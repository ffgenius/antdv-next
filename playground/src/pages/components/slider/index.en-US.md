---
category: Components
group: Data Entry
title: Slider
description: A Slider component for displaying current value and intervals in range.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*_4heQaUrFn4AAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*XkgXTaudeosAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
---

<DocHeading></DocHeading>

## When To Use {#when-to-use}

To let user select a value/range from a set of values.

## Examples {#examples}

<demo-group>
  <demo src="./demo/basic.vue">Basic</demo>
  <demo src="./demo/input-number.vue">Slider with InputNumber</demo>
  <demo src="./demo/icon-slider.vue">Slider with icon</demo>
  <demo src="./demo/tip-formatter.vue">Customize tooltip</demo>
  <demo src="./demo/event.vue">Event</demo>
  <demo src="./demo/mark.vue">Graduated slider</demo>
  <demo src="./demo/vertical.vue">Vertical</demo>
  <demo src="./demo/show-tooltip.vue">Control ToolTip</demo>
  <demo src="./demo/reverse.vue">Reverse</demo>
  <demo src="./demo/draggableTrack.vue">Draggable Track</demo>
  <demo src="./demo/multiple.vue">Multiple Handles</demo>
  <demo src="./demo/editable.vue">Dynamic edit nodes</demo>
  <demo src="./demo/style-class.vue">Customize Semantic Elements</demo>
</demo-group>

## API

### Property {#property}

Common props ref：[Common props](/docs/vue/common-props)

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | SliderClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | SliderStylesType | - | - |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| change | Callback function that is fired when the user changes the slider's value | (value: any) =&gt; void | - |
| afterChange | - | (value: any) =&gt; void | - |
| changeComplete | Fire when `mouseup` or `keyup` is fired | (value: any) =&gt; void | - |
