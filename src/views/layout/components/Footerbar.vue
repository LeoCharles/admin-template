<template>
  <div class="footerbar">
    Copyright 2003-2033 dahantc.com Inc.All Rights Reserved.大汉三通版权所有
  </div>
</template>

<script>
export default {
  name: 'Footerbar'
}
</script>

<style lang="scss" scoped>
$bgc:#1f2d3d;

.footerbar {
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: $bgc;
  font-size: 12px;
  color: #ccc;
}
.mobile {
  .footerbar {
    display: none;
  }
}
</style>
