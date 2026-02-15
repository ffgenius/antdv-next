<docs lang="zh-CN">
可以获得是否固定的状态。
</docs>

<docs lang="en-US">
Callback with affixed state.
</docs>

<template>
  <a-affix :offset-top="120" @change="(affixed) => console.log(affixed)">
    <a-button>
      120px to affix top
    </a-button>
  </a-affix>
</template>
