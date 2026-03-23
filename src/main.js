import { createApp } from "vue";
import App from "./App.vue";
import FileViewer from '@pangju/file-viewer'

const app = createApp(App);

app.use(FileViewer);
app.mount("#app");