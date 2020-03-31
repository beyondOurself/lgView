<template>
  <div class="show-wrap">
    <div class="content-wrap">
        <div class="content">
                <Lg-Table :data="table['attribute']" title="属性"></Lg-Table>
                <Lg-Table :data="table['event']" title="事件"></Lg-Table>
                <h2>代码示例</h2>
                <Lg-Explain :data="data['base']" title="基础用法">
                  使用 <Lg-Highlight>lg-button</Lg-Highlight>  为按钮的自定义标签. <Lg-Highlight>value:</Lg-Highlight> 属性设置按钮的显示的文本. <Lg-Highlight>type:</Lg-Highlight>预制了很多样式.
                   <Lg-Highlight>@click="handleClick":</Lg-Highlight> 触发按钮的点击事件.
                </Lg-Explain>
        </div>
    </div>
    <div class="directory">
      <div class="divWrap">
        <div class="imgWrap">
          <img  />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import gif from "../../imgs/button.gif";
import { button } from "../../data/code.js";

export default {
  data() {
    return {
      url: gif,
      data:button["code"],
      table:button["table"]
    };
  }, 
  mounted(){
     
  }
};
</script>
