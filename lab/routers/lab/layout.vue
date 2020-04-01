<template>
  <Lg-Container :url="url">
    <Lg-Table :data="table['row']" title="row属性"></Lg-Table>
    <Lg-Table :data="table['col']" title="col属性"></Lg-Table>
    <h2>代码示例</h2>
    <Lg-Explain :data="data['base']" title="基础用法">
      使用
      <Lg-Highlight>lg-row,lg-col</Lg-Highlight>为布局的自定义标签.
      <Lg-Highlight>gutter:</Lg-Highlight>项的间隔,单位是pr.
      <Lg-Highlight>span:</Lg-Highlight>以项的分割基数
      <Lg-Highlight>(默认:24)</Lg-Highlight>为底,按比例进行分配,例如: span = "6" 其大小等于
      <Lg-Highlight>6/24 (25%)</Lg-Highlight>父元素的大小 .
      <Lg-Highlight>flex:</Lg-Highlight>flex布局的原属性.例如: 当组内存在两项元素设置属性为
      <Lg-Highlight>flex="1" ,flex="2"</Lg-Highlight>,则他们占据可分配空间的
      <Lg-Highlight>1/3,2/3</Lg-Highlight>.
      <br />
      <Lg-Highlight>注意1:</Lg-Highlight>当组内存在不同项使用span,flex属性时候.优先计算span项的空间,在将剩余空间分配给flex项.
      <Lg-Highlight>注意2:</Lg-Highlight>同一项不能同时使用span,flex属性.
    </Lg-Explain>
    <Lg-Explain :data="data['row']" title="row">
      <Lg-Highlight>justify:</Lg-Highlight>水平方向对齐方式,值包含start,end,center,space-around.spance-between.
      <Lg-Highlight>items:</Lg-Highlight>垂直方向对齐方式:值包含start,end,center,baseline.
      <Lg-Highlight>wrap:</Lg-Highlight>换行的方式.
    </Lg-Explain>
     <Lg-Explain :data="data['order']" title="order">
      <Lg-Highlight>order:</Lg-Highlight>越小,排的越前.
    </Lg-Explain>
  </Lg-Container>
</template>
<script>
import gif from "../../imgs/layout.gif";
import { layout } from "../../data/code.js";

export default {
  data() {
    return {
      url: gif,
      data: layout["code"],
      table: layout["table"]
    };
  },
  mounted() {}
};
</script>
