<template>
  <div :class="Classes">
    <div :class="descriptionClasses">基础用法</div>
    <div :class="codeClasses">
      <pre v-highlight>
            <code v-text="datas">
                {{}}
           </code>
       </pre>
    </div>
  </div>
</template>
<script>
const prefixClass = "lg-explain";
import codeData from "../data/code.json";
export default {
  data() {
    return {
        datas:""
    };
  },
  computed: {
    Classes() {
      return [`${prefixClass}`];
    },
    descriptionClasses() {
      return [`${prefixClass}-description`];
    },
    codeClasses() {
      return [`${prefixClass}-code`];
    }
  }, 
  mounted(){
       this.datas = codeData[0].value;
  }
};
</script>
