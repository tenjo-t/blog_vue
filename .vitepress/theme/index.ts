import type { Theme } from "vitepress";

import Layout from "./Layout.vue";
import "@acab/reset.css";
import "./styles/base.css";
import "./styles/color.css";
import "./styles/typography.css";

export default {
  Layout,
} satisfies Theme;
