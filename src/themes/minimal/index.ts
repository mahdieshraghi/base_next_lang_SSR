import type { ThemeModule } from "@/theme-engine/types";
import { config } from "./config";
import { Layout } from "./components/Layout";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./styles.css";

const minimalTheme: ThemeModule = {
  config,
  components: {
    Layout,
    Header,
    Footer,
  },
};

export default minimalTheme;

