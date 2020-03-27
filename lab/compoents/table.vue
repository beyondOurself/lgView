<template>
  <table :class="classes">
    <caption>
      <h2 v-text="title"></h2>
    </caption>
    <thead>
      <tr>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,index) in data" :key="index">
        <td>{{item.property}}</td>
        <td>{{item.explain}}</td>
        <td>{{item.type}}</td>
        <td>{{item.default}}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
const prefixClass = "lg-table";
export default {
  props: {
    data: {
      type: Array
    },
    title:{
        type:String,
        default:"属性"
    }

  },
  computed: {
    classes() {
      return [`${prefixClass}`];
    }
  },
};
</script>
