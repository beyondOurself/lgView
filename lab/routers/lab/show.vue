<template>
  <div class="show-wrap">
    <div class="content-wrap">
        <div class="content">
                <Lg-Table :data="table" title="其他"></Lg-Table>
                <h2>代码示例</h2>
                <Lg-Explain :data="data" title="基础用法">
                   我就是我
                </Lg-Explain>
        </div>
    </div>
    <div class="directory">
      <div class="divWrap">
        <div class="imgWrap">
          <img :src="url" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import gif from "../../imgs/Animation.gif";
import { button } from "../../data/code.js";

export default {
  data() {
    return {
      url: gif,
      data:button["code"]["base"],
      table:button["table"]["attribute"]
    };
  }, 
  mounted(){
     
  }
};
</script>
