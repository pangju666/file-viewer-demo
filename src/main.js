import { createApp } from "vue";
import App from "./App.vue";
import FileViewer from '@pangju666/file-viewer'
import "@pangju666/file-viewer/index.css";

const app = createApp(App);

app.use(FileViewer);
app.mount("#app");