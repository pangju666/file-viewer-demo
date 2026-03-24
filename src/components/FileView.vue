<template>
  <file-viewer :types="fileTypes" :data="testFiles" :viewer-props="options" class="pangju-wh-100" />
</template>

<script setup>
import {FileViewer} from "@pangju666/file-viewer";
import "@pangju666/file-viewer/index.css";
import { testFiles } from "@/utils/mock";
import { onMounted, ref } from "vue";

import HanaMinAFont from "@/assets/fonts/HanaMinA.ttf";
import NanumGothicRegularFont from "@/assets/fonts/HanaMinA.ttf";
import NotoSansDisplaySemiCondensedLightItalicFont from "@/assets/fonts/HanaMinA.ttf";
import RobotoLightItalicFont from "@/assets/fonts/HanaMinA.ttf";

const fileTypes = ref([]);

const options = ref({
  /*office: {
    mode: "onlyOffice",
    onlyOfficeServerUrl: "http://localhost:10000"
  },*/
  pdf: {
    pdfjsViewBaseUrl: "pdfjs/web/viewer.html",
    /*mode: "onlyOffice",
    onlyOfficeServerUrl: "http://localhost:10000"*/
  },
 dxf: {
    fonts: [
      HanaMinAFont,
      NanumGothicRegularFont,
      NotoSansDisplaySemiCondensedLightItalicFont,
      RobotoLightItalicFont
    ]
  }
});

onMounted( () => {
  fileTypes.value = Array.from(
      new Set(testFiles.map((item) => item.type)).values(),
  );
});
</script>