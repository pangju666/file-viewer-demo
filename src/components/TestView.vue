<template>
  <office-viewer :src="{url: 'https://disk.sample.cat/samples/docx/sample4.docx', mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'}"  mode="onlyOffice" only-office-server-url="http://localhost:10000" class="pangju-wh-100" />
</template>

<script setup>
import { testFiles } from "@/utils/mock";
import { onMounted, ref } from "vue";

import HanaMinAFont from "@/assets/fonts/HanaMinA.ttf";
import NanumGothicRegularFont from "@/assets/fonts/HanaMinA.ttf";
import NotoSansDisplaySemiCondensedLightItalicFont from "@/assets/fonts/HanaMinA.ttf";
import RobotoLightItalicFont from "@/assets/fonts/HanaMinA.ttf";
import {OfficeViewer} from "@pangju/file-viewer";

const noMore = ref(false);
const fileTypes = ref([]);

const fileItems = ref([{
  //name: "sample-a4.pdf",
  //type: "PDF文档",
  //mimeType: "text/x-web-markdown",
  cover: "cover",
  //cover: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
  //source: "https://disk.sample.cat/samples/docx/sample4.docx",
  //tags: ["测试", "测试"],
  //size: 10000000,
  /*descriptions: [
    {
      name: "描述",
      value: "测试用文件aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
    {
      name: "描述2",
      value: "测试用文件aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
  ],*/
},]);

const options = ref({
  office: {
    mode: "onlyOffice",
    onlyOfficeServerUrl: "http://localhost:10000"
  },
  pdf: {
    mode: "onlyOffice",
    onlyOfficeServerUrl: "http://localhost:10000"
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
    /*if (noMore.value) {
      resolve([]);
      return;
    }*/
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
      noMore.value = (types ?? []).length > 0;
      /* if (page === 10) {
        noMore.value = true;
      }*/
    }, 100);
  });
};
</script>