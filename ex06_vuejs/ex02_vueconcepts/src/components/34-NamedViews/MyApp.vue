<template>
  <div class="layout">
    <router-view name="header"></router-view>
    <div class="container">
      <router-view name="sidebar"></router-view>
      <router-view></router-view> <!-- Default component -->
      <router-view name="content"></router-view>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
}

.container {
  display: flex;
  flex-direction: row;
}
</style>
