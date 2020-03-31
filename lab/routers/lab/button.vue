<template>
  <Lg-Container :url="url">
    <Lg-Table :data="table['attribute']" title="属性"></Lg-Table>
    <Lg-Table :data="table['event']" title="事件"></Lg-Table>
    <h2>代码示例</h2>
    <Lg-Explain :data="data['base']" title="基础用法">
      使用
      <Lg-Highlight>lg-button</Lg-Highlight>为按钮的自定义标签.
      <Lg-Highlight>value:</Lg-Highlight>属性设置按钮的显示的文本.
      <Lg-Highlight>type:</Lg-Highlight>预制了很多样式.
      <Lg-Highlight>@click="handleClick":</Lg-Highlight>触发按钮的点击事件.
    </Lg-Explain>
    <Lg-Explain :data="data['display']" title="按钮状态">
      默认按钮呈现为
      <Lg-Highlight>display="inline";</Lg-Highlight>模式. 当为
      <Lg-Highlight>block</Lg-Highlight>时按钮将填满父元素的空间.
    </Lg-Explain>
    <Lg-Explain :data="data['size']" title="按钮大小">
      按钮的默认尺寸
      <Lg-Highlight>size="normal"</Lg-Highlight>. 当为
      <Lg-Highlight>small</Lg-Highlight>时为小号尺寸.当为
      <Lg-Highlight>large</Lg-Highlight>时为大号尺寸.
    </Lg-Explain>
    <Lg-Explain :data="data['color']" title="按钮颜色">
      通过设置
      <Lg-Highlight>color=""</Lg-Highlight>来自定义按钮的颜色.
    </Lg-Explain>
  </Lg-Container>
</template>
<script>
import gif from "../../imgs/button.gif";
import { button } from "../../data/code.js";

export default {
  data() {
    return {
      url: gif,
      data: button["code"],
      table: button["table"]
    };
  },
  mounted() {}
};
</script>
