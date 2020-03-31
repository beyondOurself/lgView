<template>
  <Lg-Container brief :class="classes">
    <h2>说明</h2>
    <!--  -->
    <Lg-Explain :data="data['base']" title="单位(pr)">
      本项目使用的
      <Lg-Highlight>rem</Lg-Highlight>适配不同手机屏幕大小.
      默认设计稿设定为375px, 1rem = 100px . (例如: 设计稿按钮宽度为
      <Lg-Highlight>30px</Lg-Highlight>,其对应的适配大小为
      <Lg-Highlight>0.38rem == 38pr</Lg-Highlight>).
      在 js 中可以使用
      <Lg-Highlight>this.p2r()</Lg-Highlight>函数来转换. 在css 中可使用
      <Lg-Highlight>.pr()[@res]</Lg-Highlight>进行单位的转换.
      (例如: 设计稿元素宽度为 38 px,则 js ==> this.p2r(38). css ==> .pr(38)[@res]).
      可以根据自身项目来重新设定设计稿大小,和rem的比例.在本项目
      <Lg-Highlight>src > utils > px2rem.js</Lg-Highlight>
    </Lg-Explain>
    <!--  -->
    <Lg-Explain title="颜色">
       <p>颜色参考MUI框架  :  <a
        href=" https://github.com/dcloudio/mui"
        target="_Blank"
      > https://github.com/dcloudio/mui</a></p>
      <Lg-fills></Lg-fills>
      <Lg-fills color="#208bff" filler="primary(#208bff)"></Lg-fills>
      <Lg-fills color="#4cd964" filler="success(#4cd964)"></Lg-fills>
      <Lg-fills color="#f0ad4e" filler="warning(#f0ad4e)"></Lg-fills>
      <Lg-fills color="#dd524d" filler="danger(#dd524d)"></Lg-fills>
      <Lg-fills color="#8a6de9" filler="royal(#8a6de9)"></Lg-fills>
      <Lg-fills color="#cccccc" filler="disabled(#cccccc)"></Lg-fills>
      <Lg-fills color="#f3f3f3" filler="disabled-cover(#f3f3f3)"></Lg-fills>
    </Lg-Explain>
    <!--  -->
    <Lg-Explain title="图标">
      图标I参考IView组件
      <a
        href="https://www.iviewui.com/components/icon"
        target="_Blank"
      >https://www.iviewui.com/components/icon</a>
    </Lg-Explain>
    <!--  -->
  </Lg-Container>
</template>
<script>
import { show } from "../../data/code.js";

const prefixClass = "speicfication";
export default {
  data() {
    return {
      data: show["code"]
    };
  },
  computed: {
    classes() {
      return [`${prefixClass}`];
    }
  }
};
</script>
