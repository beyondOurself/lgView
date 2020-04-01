<template>
  <div>
    <h4>span="3,6" flex="1,2" :gutter="10"</h4>
    <lg-row :gutter="10" >
      <lg-col span="3">
        <div style="background-color: red;">1-1</div>
      </lg-col>
      <lg-col span="6">
        <div style="background-color: pink;">1-2</div>
      </lg-col>
      <lg-col :flex="1">
        <div style="background-color: blue;">1-3</div>
      </lg-col>
      <lg-col :flex="2">
        <div style="background-color: green;">1-4</div>
      </lg-col>
    </lg-row>
    <h4>order="4,3,2,1"</h4>
    <lg-row :gutter="10" >
      <lg-col span="3" :order="4">
        <div style="background-color: red;">1-1</div>
      </lg-col>
      <lg-col span="6" :order="3">
        <div style="background-color: pink;">1-2</div>
      </lg-col>
      <lg-col :flex="1" :order="2">
        <div style="background-color: blue;">1-3</div>
      </lg-col>
      <lg-col :flex="2" :order="1">
        <div style="background-color: green;">1-4</div>
      </lg-col>
    </lg-row>
    <h4>sjustify,items,wrap </h4>
    <lg-row justify="space-around" items="start" wrap="wrap" style="background-color:lightgray; height:1rem">
        <div style="background-color: red; height:40px; width:100px;">2-1</div>
        <div style="background-color: pink; height:40px; width:100px;">2-2</div>
        <div style="background-color: blue; height:40px; width:100px;">2-3</div>
        <div style="background-color: green; height:40px; width:100px;">2-4</div>
        <div style="background-color: yellow; height:40px; width:100px;">2-5</div>
    </lg-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datas: [
        {
          property: "gutter(row)",
          declare: "项的间距",
          mold: "Number",
          default: "0"
        },
        {
          property: "base(row)",
          declare: "分割的基数",
          mold: "Number",
          default: "24"
        },
        {
          property: "justify(row)",
          declare: "主轴对齐的方式",
          mold: "start, end, center, space-around, space-between",
          default: "start"
        },
        {
          property: "items(row)",
          declare: "交叉主轴对齐的方式",
          mold: "start, end, center, baseline",
          default: "start"
        },
        {
          property: "wrap(row)",
          declare: "主轴换行的方式",
          mold: "nowrap, wrap, wrap-reverse",
          default: "nowrap"
        },
        {
          property: "span(col)",
          declare: "项的宽度(1/24)",
          mold: "String,Number",
          default: "0"
        },
        {
          property: "offset(col)",
          declare: "项的左边偏移(1/24)",
          mold: "Number",
          default: "0"
        },
        {
          property: "order(col)",
          declare: "排序越小越前",
          mold: "Number",
          default: "0"
        },
        {
          property: "flex(col)",
          declare: "缩放比例(:span :flex 不能同在一个 col 使用)",
          mold: "Number",
          default: "0"
        }
      ]
    };
  }
};
</script>