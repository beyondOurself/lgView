<template>
  <div class="show-wrap">
    <div class="content-wrap">
        <div class="content">
                <Lg-Explain></Lg-Explain>
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
export default {
  data() {
    return {
      url: gif
    };
  }
};
</script>
