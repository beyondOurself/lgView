<template>
    <div class="lg-tag-area-wrap">
        <lg-tag-area mar="0"  label="标题">
            <div>我就是我是颜色不一样的烟火</div>
        </lg-tag-area>
        <lg-tag-area mar="1" label="mar变为1">
            <div>我就是我是颜色不一样的烟火</div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </lg-tag-area>
        <hr />
    <lg-table :data="datas"></lg-table>
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
<style scoped>
  .lg-tag-area-wrap{
      padding: 1rem 0 ; 
      background-color: white;
  }
</style>