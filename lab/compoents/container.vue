<template>
  <!-- <div class="show-wrap">
    <div class="content-wrap">
        <div class="content install-content">
                <slot></slot>
        </div>
    </div>
  </div> -->
   <div class="show-wrap">
    <div class="content-wrap">
        <div :class="contentClasses">
            <slot></slot>
        </div>
    </div>
    <div class="directory" v-if="!brief">
      <div class="divWrap">
        <div class="imgWrap">
          <img :src="url" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props:{
        brief:{
            type:Boolean
        },
        url:{
            type:[String,Object]
        }
    },
    computed:{
        contentClasses(){
            return  [`content`, {[`install-content`]:this.brief}]
        }
    }
}
</script>