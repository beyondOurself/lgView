<template>
  <Lg-Container :url="url">
    <Lg-Table :data="table['attribute']" title="属性"></Lg-Table>
    <h2>代码示例</h2>
    <Lg-Explain :data="data['base']" title="基础用法">
      使用
      <Lg-Highlight>lg-list</Lg-Highlight>为图标的自定义标签.
      <Lg-Highlight>gap:</Lg-Highlight>内边距.
      <Lg-Highlight>spacing:</Lg-Highlight>外边距.
    </Lg-Explain>
  </Lg-Container>
</template>
<script>
import gif from "../../imgs/card.gif";
import { card } from "../../data/code.js";

export default {
  data() {
    return {
      url: gif,
      data: card["code"],
      table: card["table"]
    };
  }
};
</script>
