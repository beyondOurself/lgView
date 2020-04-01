<template>
  <Lg-Container :url="url">
    <Lg-Table :data="table['attribute']" title="属性"></Lg-Table>
    <h2>代码示例</h2>
    <Lg-Explain :data="data['base']" title="基础用法">
      使用
      <Lg-Highlight>lg-list , lg-list-item</Lg-Highlight>为图标的自定义标签.
      list组件 的基本架构.
    </Lg-Explain>
    <Lg-Explain :data="data['template']" title="list添加常用的模板">
      向list组件加入<Lg-Highlight>lg-list-template</Lg-Highlight> 模板.
      可以使用属性的方式向template注入值. 也可以使用往特定的slot写入自定义内容.
    </Lg-Explain>
  </Lg-Container>
</template>
<script>
import gif from "../../imgs/list.gif";
import { list } from "../../data/code.js";

export default {
  data() {
    return {
      url: gif,
      data: list["code"],
      table: list["table"]
    };
  },
  mounted() {}
};
</script>
