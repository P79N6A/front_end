<template>
  <div class="nav-breadcrumb-wrap">
    <div class="container">
      <nav class="nav-breadcrumb">
        <a href="/">首页</a>
        <slot name="bread"></slot>
      </nav>
    </div>
  </div>
</template>

<script>
    export default {
        name: "bread"
    }
</script>

<style scoped>

</style>
