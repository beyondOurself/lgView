<template>
  <div>
    <lg-row :gutter="50" type="grid">
      <lg-col span="6">
        <div style="background-color: red;">1-1</div>
      </lg-col>
      <lg-col span="6">
        <div style="background-color: pink;">1-2</div>
      </lg-col>
      <lg-col span="6">
        <div style="background-color: blue;">1-3</div>
      </lg-col>
      <lg-col span="6">
        <div style="background-color: green;">1-4</div>
      </lg-col>
    </lg-row>
    <lg-row :gutter="10">
      <lg-col span="6">
        <div style="background-color: red;">2-1</div>
      </lg-col>
      <lg-col span="6" :offset="6">
        <div style="background-color: pink;">2-2</div>
      </lg-col>
    </lg-row>
    <lg-row :gutter="10" justify="center">
      <lg-col span="6">
        <div style="background-color: red;">3-1</div>
      </lg-col>
      <lg-col span="6">
        <div style="background-color: pink;">3-2</div>
      </lg-col>
    </lg-row>
    <lg-row :gutter="10" justify="space-around" direction="column">
      <lg-col span="6">
        <div style="background-color: red;">4-1</div>
      </lg-col>
      <lg-col span="6">
        <div style="background-color: pink;">4-2</div>
      </lg-col>
    </lg-row>
    <lg-row :gutter="10" justify="space-between" wrap="wrap">
      <lg-col span="6">
        <div style="background-color: red;">5-1</div>
      </lg-col>
      <lg-col span="6">
        <div style="background-color: pink;">5-2</div>
      </lg-col>
      <lg-col span="6">
        <div style="background-color: pink;">5-3</div>
      </lg-col>
      <lg-col span="6">
        <div style="background-color: pink;">5-4</div>
      </lg-col>
      <lg-col span="6">
        <div style="background-color: pink;">5-5</div>
      </lg-col>
    </lg-row>
    <lg-row
      :gutter="10"
      justify="end"
      wrap="wrap"
      style="height:2rem; background-color:gray; align-items:center; "
    >
      <lg-col span="6">
        <div style="background-color: red;">6-1</div>
      </lg-col>
      <lg-col span="6">
        <div style="background-color: pink;">6-2</div>
      </lg-col>
      <lg-col span="6">
        <div style="background-color: pink;">6-3</div>
      </lg-col>
      <lg-col span="6">
        <div style="background-color: pink;">6-4</div>
      </lg-col>
      <lg-col span="6">
        <div style="background-color: pink;">6-5</div>
      </lg-col>
      <lg-col span="6">
        <div style="background-color: pink;">6-6</div>
      </lg-col>
    </lg-row>
    <lg-row
      justify="center"
      items="center"
      style="height:2rem;align-items:center; background-color:#222; "
    >
      <div style="height:1rem; width:1rem; background-color:red;"></div>
    </lg-row>
    <lg-row :gutter="10" justify="center" wrap="wrap">
      <lg-col :span="10">
        <div style="background-color: pink;">7-5</div>
      </lg-col>
      <lg-col :flex="1">
        <div style="background-color: pink;">7-5</div>
      </lg-col>
      <lg-col :flex="1">
        <div style="background-color: pink;">7-5</div>
      </lg-col>
      <lg-col :flex="1">
        <div style="background-color: pink;">7-5</div>
      </lg-col>
    </lg-row>
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