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
    </lg-input-group>
    <hr />
    <lg-row>
      <lg-col span="12">
        <lg-row center>
          <lg-radio v-model="selectRes" label="apple">
            <lg-icon type="logo-octocat"></lg-icon>
            <span>{{selectRes}}</span>
          </lg-radio>
        </lg-row>
      </lg-col>
      <lg-col span="12">
        <lg-row center>
          <lg-radio disabled>disabled</lg-radio>
        </lg-row>
      </lg-col>
    </lg-row>
    <hr />
    <lg-radio-group>
      <lg-row>
        <lg-col :flex="1">
          <lg-row center>
            <lg-radio v-model="apple" name="phone" label="apple">
              <lg-icon type="logo-octocat"></lg-icon>
              <span>{{apple}}</span>
            </lg-radio>
          </lg-row>
        </lg-col>
        <lg-col :flex="1">
          <lg-row center>
            <lg-radio v-model="android" name="phone" label="android">
              <lg-icon type="logo-octocat"></lg-icon>
              <span>{{android}}</span>
            </lg-radio>
          </lg-row>
        </lg-col>
      </lg-row>
    </lg-radio-group>
    <hr />
    <lg-radio-group>
      <lg-row>
        <lg-col :flex="1">
          <lg-row center>
            <lg-radio v-model="apple" name="phone" label="apple">
              <lg-icon type="logo-octocat"></lg-icon>
              <span>{{apple}}</span>
            </lg-radio>
          </lg-row>
        </lg-col>
        <lg-col :flex="1">
          <lg-row center>
            <lg-radio v-model="android" name="phone" label="android">
              <lg-icon type="logo-octocat"></lg-icon>
              <span>{{android}}</span>
            </lg-radio>
          </lg-row>
        </lg-col>
      </lg-row>
    </lg-radio-group>
    <hr />
    <lg-radio-group>
      <lg-row>
        <lg-col :flex="1">
          <lg-row center>
            <lg-radio v-model="apple" name="phone" label="apple">
              <lg-icon type="logo-octocat"></lg-icon>
              <span>{{apple}}</span>
            </lg-radio>
          </lg-row>
        </lg-col>
        <lg-col :flex="1">
          <lg-row center>
            <lg-radio v-model="android" name="phone" label="android">
              <lg-icon type="logo-octocat"></lg-icon>
              <span>{{android}}</span>
            </lg-radio>
          </lg-row>
        </lg-col>
      </lg-row>
    </lg-radio-group>
    <hr />
    <lg-table :data="datas"></lg-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectRes: true,
      selectRes2: "",
      apple:"苹果",
      android:"安卓",
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
      ]
    };
  },
  mounted() {
    console.log(this.value);
  },
  methods: {
    handleClick() {
      window.alert("触发了~" + this.value);
    }
  }
};
</script>