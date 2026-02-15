<docs lang="zh-CN">
通过 `variant` 设置分割线的样式,可选 `solid`、`dashed` 和 `dotted`。
</docs>

<docs lang="en-US">
You can use `variant` to set the style of Divider, options are `solid`, `dashed` and `dotted`.
</docs>

<template>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
    probare, quae sunt a te dicta? Refert tamen, quo modo.
  </p>
  <a-divider style="border-color:#7cb305">
    Solid
  </a-divider>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
    probare, quae sunt a te dicta? Refert tamen, quo modo.
  </p>
  <a-divider variant="dotted" style="border-color:#7cb305">
    Dotted
  </a-divider>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
    probare, quae sunt a te dicta? Refert tamen, quo modo.
  </p>
  <a-divider variant="dashed" style="border-color:#7cb305" dashed>
    Dashed
  </a-divider>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
    probare, quae sunt a te dicta? Refert tamen, quo modo.
  </p>
</template>
