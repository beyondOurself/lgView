<template>
    <div class="content" >
        <lg-tag-area mar="0"  label="标题">
            <div>我就是我是颜色不一样的烟火</div>
        </lg-tag-area>
        <div class="interval-box"></div>
        <lg-tag-area space="10" label="这是标题呀~">
            <div>我就是我是颜色不一样的烟火</div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </lg-tag-area>
        <hr />
    </div>
</template>
<script>
export default {
  data() {
    return {
      datas: [
        {
          property: "label",
          declare: "区域块的标题",
          mold: "String",
          default: "无标题"
        },
        {
          property: "mar",
          declare: "主体包裹块的margin",
          mold: "String,Number",
          default: "-"
        },
        {
          property: "styleBox",
          declare: "主体包裹块的样式对象",
          mold: "Object",
          default: "{}"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.content{
  .lg-tag-area{
   background-color: white;
  }
  .interval-box{
  height: 50px;
 }
}

</style>