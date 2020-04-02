<template>
  <Lg-Container :url="url">
    <Lg-Table :data="table['attribute']" title="属性"></Lg-Table>
    <h2>代码示例</h2>
    <Lg-Explain :data="data['base']" title="基础用法">
      使用
      <Lg-Highlight>lg-tag-area</Lg-Highlight>为图标的自定义标签.
      <Lg-Highlight>label:</Lg-Highlight>标题.
      <Lg-Highlight>space:</Lg-Highlight>外间距.
    </Lg-Explain>
  </Lg-Container>
</template>
<script>
import gif from "../../imgs/tagArea.gif";
import { tagArea } from "../../data/code.js";

export default {
  data() {
    return {
      url: gif,
      data: tagArea["code"],
      table: tagArea["table"]
    };
  },
};
</script>
