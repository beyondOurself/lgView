<template>
  <Lg-Container :url="url">
    <Lg-Table :data="table['attribute']" title="属性"></Lg-Table>
    <h2>代码示例</h2>
    <Lg-Explain :data="data['base']" title="基础用法">
       单独使用的时候,绑定单一变量,返回: <Lg-Highlight>true | false</Lg-Highlight> 
    </Lg-Explain>
    <Lg-Explain :data="data['group']" title="组合使用">
       组合使用的时候,绑定数组返回所有选中checkbox值.
    </Lg-Explain>
    <Lg-Explain :data="data['disabled']" title="无效">
       <Lg-Highlight>disabled: </Lg-Highlight> 为true时候,checkbox呈现为无效状态.
    </Lg-Explain>
    <Lg-Explain :data="data['size']" title="尺寸">
       <Lg-Highlight>size: </Lg-Highlight>可以单独或组上应用.当为<Lg-Highlight>small</Lg-Highlight>时候,小尺寸.为<Lg-Highlight>large</Lg-Highlight>时候,大尺寸.
    </Lg-Explain>
  </Lg-Container>
</template>
<script>
import gif from "../../imgs/checkbox.gif";
import { checkbox } from "../../data/code.js";

export default {
  data() {
    return {
      url: gif,
      data: checkbox["code"],
      table: checkbox["table"]
    };
  }
};
</script>
