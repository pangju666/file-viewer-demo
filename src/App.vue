<template>
  <FileView />
</template>

<script setup>
import "@pangju/file-viewer/index.css";
import FileView from "@/components/FileView.vue";
import TestView from "@/components/TestView.vue";
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>