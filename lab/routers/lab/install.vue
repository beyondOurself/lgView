<template>
  <Lg-Container brief>
    <h2>安装</h2>
    <Lg-Explain :data="install['cdn']" title="CDN引入">
      通过
      <a
        href="https://unpkg.com/browse/lg-view/dist/"
        target="_Blank"
      >https://unpkg.com/browse/lg-view/dist/</a> 可以看到 lgView 最新版本的资源，也可以切换版本选择需要的资源，在页面上引入 js 和 css 文件即可开始使用：
    </Lg-Explain>
    <Lg-Explain :data="install['cdnExample']" title="cdn快速引入示例"></Lg-Explain>
    <Lg-Explain :data="install['npm']" title="NPM安装">推荐使用 npm 来安装</Lg-Explain>
  </Lg-Container>
</template>
<script>
import { install } from "../../data/code.js";

export default {
  data() {
    return {
      install: install["code"]
    };
  },
  mounted() {}
};
</script>
