<template>
    <span :class="classess"><slot></slot></span>
</template>
<script>
const prefixClass ="lg-highlight";
export default {
    props:{
       type:{
           type:String,
           default:"code"
       }
    },
    computed:{
        classess(){
            return [`${prefixClass}`]
        }
    }
}
</script>