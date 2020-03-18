<template>
  <div>
    <lg-input-group>
      <lg-input-row
        :selectList="selectArr"
        type="select"
        icon="select"
        v-model="value"
        @click="handleClick()"
      ></lg-input-row>
      <lg-input-row icon="select" @click="handleClick"></lg-input-row>
      <lg-input-row
        icon="select"
        :label-flex="2"
        :input-flex="2"
        placeholder="placeholder"
        readonly
      ></lg-input-row>
      <lg-input-row>
        <lg-row center>
          <lg-col span="12">
            <lg-row center>
              <lg-radio v-model="selectRes" label="test" size="small">
                <lg-icon type="logo-octocat"></lg-icon>
                <span>{{selectRes}}</span>
              </lg-radio>
            </lg-row>
          </lg-col>
          <lg-col span="12">
            <lg-row center>
              <lg-radio disabled >disabled</lg-radio>
            </lg-row>
          </lg-col>
        </lg-row>
      </lg-input-row>
    </lg-input-group>
    <hr>
    <lg-table :data="datas"></lg-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectRes: false,
      value: "",
      selectArr: [
        {
          value: "aaaa",
          text: "aaaa"
        },
        {
          value: "bbbb",
          text: "bbbb"
        }
      ],
      datas: [
        {
          property: "label(row)",
          declare: "input的标签",
          mold: "String",
          default: "默认"
        },
        {
          property: "type(row)",
          declare: "input的类型",
          mold: "String",
          default: "text [text , select]"
        },
        {
          property: "icon(row)",
          declare: "图标.",
          mold: "String",
          default: "默认可选项(select)"
        },
        {
          property: "placeholder(row)",
          declare: "input的原生属性placeholder",
          mold: "String",
          default: "请输入"
        },
        {
          property: "labelFlex(row)",
          declare: "标签的flex",
          mold: "Number",
          default: "1"
        },
        {
          property: "inputFlex(row)",
          declare: "input的flex",
          mold: "Number",
          default: "1"
        },
        {
          property: "readonly(row)",
          declare: "input的原生属性readonly",
          mold: "Boolean",
          default: "false"
        },
        {
          property: "readonly(row)",
          declare: "input的原生属性readonly",
          mold: "Boolean",
          default: "false"
        },
        {
          property: "value(row)",
          declare: "input的输入值",
          mold: "String",
          default: "--"
        },
        {
          property: "otherIcon(row)",
          declare: "引用其他的字体图标",
          mold: "String",
          default: "--"
        },
        {
          property: "readonly(group)",
          declare: "全组的readonly",
          mold: "Boolean",
          default: "false"
        }
      ],
    };
  },
  methods: {
    handleClick() {
      window.alert("触发了~" + this.value);
    }
  }
};
</script>