<template>
  <Lg-Container :url="url">
    <Lg-Table :data="table['attribute']" title="属性"></Lg-Table>
    <h2>代码示例</h2>
    <Lg-Explain :data="data['base']" title="基础用法">
      使用
      <Lg-Highlight>lg-icon</Lg-Highlight>为图标的自定义标签.
      <Lg-Highlight>type:</Lg-Highlight>显示图标的类型.
      <Lg-Highlight>size:</Lg-Highlight>控制图标的大小.
      <Lg-Highlight>color:</Lg-Highlight>控制图标的颜色.
    </Lg-Explain>
  </Lg-Container>
</template>
<script>
import gif from "../../imgs/icon.gif";
import { icon } from "../../data/code.js";

export default {
  data() {
    return {
      url: gif,
      data: icon["code"],
      table: icon["table"]
    };
  }
};
</script>
