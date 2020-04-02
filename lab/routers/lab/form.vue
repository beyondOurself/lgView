<template>
  <Lg-Container :url="url">
    <Lg-Table :data="table['attribute']" title="属性"></Lg-Table>
    <h2>代码示例</h2>
    <Lg-Explain :data="data['base']" title="基础用法">
      使用
      <Lg-Highlight>lg-input-group,lg-input-row</Lg-Highlight>为图标的自定义标签.
      <Lg-Highlight>label:</Lg-Highlight>设置label块的内容.没输入显示默认.
      <Lg-Highlight>v-model:</Lg-Highlight>进行双向数据监听.
    </Lg-Explain>
    <Lg-Explain :data="data['select']" title="使用select">
      <Lg-Highlight>selectList:</Lg-Highlight>下拉的数据.
      <Lg-Highlight>type:</Lg-Highlight>调整类型为 select.
    </Lg-Explain>
    <Lg-Explain :data="data['icon']" title="使用图标">
      <Lg-Highlight>icon:</Lg-Highlight>直接使用内置图标,跟图标组件用法一致.
      可以使用快捷的特殊字符串,例如:( <Lg-Highlight>icon="select"</Lg-Highlight>,使用的就是常用箭头向右图标).
      <Lg-Highlight>otherIcon:</Lg-Highlight>引用其他图标的类.
    </Lg-Explain>
    <Lg-Explain :data="data['flex']" title="布局大小">
      <Lg-Highlight>labelFlex:</Lg-Highlight> label区域块的占比.
      <Lg-Highlight>inputFlex:</Lg-Highlight> input 区域框的占比.
    </Lg-Explain>
    <Lg-Explain :data="data['flex']" title="原生属性">
      <Lg-Highlight>placeholder:</Lg-Highlight> input 输入框的placeholder属性,默认为"请输入".
      <Lg-Highlight>readonly:</Lg-Highlight> 只读属性.
    </Lg-Explain>
  </Lg-Container>
</template>
<script>
import gif from "../../imgs/form.gif";
import { form } from "../../data/code.js";

export default {
  data() {
    return {
      url: gif,
      data: form["code"],
      table: form["table"]
    };
  },
  mounted() {}
};
</script>
