<template>
  <div class="page-container">
    <header />
    <tab />
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import Header from "@/components/header/Header";
import Tab from "@/components/tab/Tab";
    export default {
        components: {
            Header,
            Tab
        }
    }
</script>

<style scoped>

</style>
