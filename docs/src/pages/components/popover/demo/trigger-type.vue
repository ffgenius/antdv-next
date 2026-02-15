<docs lang="zh-CN">
鼠标移入、聚集、点击。
</docs>

<docs lang="en-US">
Mouse to click, focus and move in.
</docs>

<template>
  <a-space wrap>
    <a-popover title="Title" trigger="hover">
      <template #content>
        <div>
          <p>Content</p>
          <p>Content</p>
        </div>
      </template>
      <a-button>Hover me</a-button>
    </a-popover>
    <a-popover title="Title" trigger="focus">
      <template #content>
        <div>
          <p>Content</p>
          <p>Content</p>
        </div>
      </template>
      <a-button>Focus me</a-button>
    </a-popover>
    <a-popover title="Title" trigger="click">
      <template #content>
        <div>
          <p>Content</p>
          <p>Content</p>
        </div>
      </template>
      <a-button>Click me</a-button>
    </a-popover>
  </a-space>
</template>
