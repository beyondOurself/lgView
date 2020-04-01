<template>
  <div>
    <lg-list border>
      <lg-list-item @click="myAlert">
        <lg-list-template
          icon="logo-octocat"
          title="s161278(上盖减磨版左上盖减磨版左上盖减磨版左)"
          content="工作表面没有达标,三角形位置没按图加工"
          footerLeft="开单者:"
          footerRight="开单时间:"
        ></lg-list-template>
      </lg-list-item   >
      <lg-list-item >
          <lg-list-template :iconStyler="{backgroundColor:'lightgray'}" >
            <lg-icon slot="icon" type="md-albums" size="40" color="lightgay"></lg-icon>
             <template slot="title">
                <h4>这是标题呀呀</h4>
             </template>
             <template slot="content">
                <span>这是内容呀</span>
             </template>
             <template slot="footer">
                <span>footer左边</span>
                <span>footer右边</span>
             </template>
          </lg-list-template>
      </lg-list-item>
      <lg-list-item >
          空白的呀~
      </lg-list-item>
    </lg-list>
    <hr />
    <lg-table :data="datas"></lg-table>
  </div>
</template>
<script>
export default {
  props: {
    iconStyle: {
      type: [Array, Object]
    },
    iconStyle: {
      type: [Array, Object]
    },
    iconStyle: {
      type: [Array, Object]
    },
    iconStyle: {
      type: [Array, Object]
    }
  },
  data() {
    return {
      datas: [
        {
          property: "-",
          declare: "-",
          mold: "-",
          default: "-"
        }
      ]
    };
  },
  methods:{
    myAlert(){
      window.alert("点击拉~")
    }
  }
};
</script>