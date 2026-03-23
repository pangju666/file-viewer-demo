<template>
  <file-viewer :types="fileTypes" :on-load="onLoad" :viewer-props="options" class="pangju-wh-100" />
</template>

<script setup>
import { testFiles } from "@/utils/mock";
import { onMounted, ref } from "vue";

import HanaMinAFont from "@/assets/fonts/HanaMinA.ttf";
import NanumGothicRegularFont from "@/assets/fonts/HanaMinA.ttf";
import NotoSansDisplaySemiCondensedLightItalicFont from "@/assets/fonts/HanaMinA.ttf";
import RobotoLightItalicFont from "@/assets/fonts/HanaMinA.ttf";

const noMore = ref(false);
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

const onLoad = (
    page,
    types,
    keyword,
) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let result = testFiles.filter(
          (item) => types?.length === 0 || types?.includes(item.type),
      );
      if (keyword) {
        result = result.filter((item) =>
            item.name?.includes(keyword),
        );
      }
      resolve(result);
      noMore.value = true;
    }, 3000);
  });
};
</script>